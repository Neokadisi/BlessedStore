require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const odbc = require('odbc');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('..'));

async function getConnection() {
  const server = process.env.DB_SERVER || 'localhost';
  const instance = process.env.DB_INSTANCE || 'SQLEXPRESS';
  const database = process.env.DB_NAME || 'BlessedStore';
  
  let serverString = server;
  if (!server.includes('\\')) {
    serverString = `${server}\\${instance}`;
  }
  
  const connectionString = `Driver={ODBC Driver 17 for SQL Server};Server=${serverString};Database={${database}};Trusted_Connection=Yes;TrustServerCertificate=Yes;`;
  
  try {
    const connection = await odbc.connect(connectionString);
    console.log('Conexión exitosa a SQL Server');
    return connection;
  } catch (err) {
    console.error('Error conectando a SQL Server via ODBC:', err);
    throw err;
  }
}

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email y contraseña son requeridos' });
  }

  let connection;
  try {
    connection = await getConnection();

    const result = await connection.query(
      'SELECT id, nombre, email, password, rol, activo FROM Usuarios WHERE email = ? AND activo = 1',
      [email]
    );

    if (!result || result.length === 0) {
      return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }

    const usuario = result[0];
    const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }

    const usuarioResponse = {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol
    };

    res.json({
      success: true,
      message: 'Login exitoso',
      usuario: usuarioResponse
    });

  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) {}
    }
  }
});

app.post('/api/registro', async (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ success: false, message: 'Todos los campos son requeridos' });
  }

  if (password.length < 6) {
    return res.status(400).json({ success: false, message: 'La contraseña debe tener al menos 6 caracteres' });
  }

  let connection;
  try {
    connection = await getConnection();

    const existe = await connection.query(
      'SELECT id FROM Usuarios WHERE email = ?',
      [email]
    );

    if (existe && existe.length > 0) {
      return res.status(400).json({ success: false, message: 'El email ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertResult = await connection.query(
      "INSERT INTO Usuarios (nombre, email, password, rol) OUTPUT INSERTED.id VALUES (?, ?, ?, 'cliente')",
      [nombre, email, hashedPassword]
    );

    const nuevoId = insertResult && insertResult[0] ? insertResult[0].id : null;

    res.json({
      success: true,
      message: 'Registro exitoso',
      usuarioId: nuevoId
    });

  } catch (err) {
    console.error('Error en registro:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) {}
    }
  }
});

app.get('/api/perfil/:id', async (req, res) => {
  const userId = req.params.id;

  let connection;
  try {
    connection = await getConnection();

    const result = await connection.query(
      'SELECT id, nombre, email, rol, fecha_creacion FROM Usuarios WHERE id = ? AND activo = 1',
      [userId]
    );

    if (!result || result.length === 0) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

    const usuario = result[0];
    res.json({
      success: true,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
        fecha_creacion: usuario.fecha_creacion
      }
    });

  } catch (err) {
    console.error('Error en perfil:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) {}
    }
  }
});

// ===== OPINIONES / RESEÑAS =====
app.get('/api/opiniones', async (req, res) => {
  let connection;
  try {
    connection = await getConnection();

    const result = await connection.query(
      'SELECT id, nombre, calificacion, comentario, fecha_creacion FROM Opiniones ORDER BY fecha_creacion DESC'
    );

    res.json({
      success: true,
      opiniones: result || []
    });

  } catch (err) {
    console.error('Error obteniendo opiniones:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) {}
    }
  }
});

app.post('/api/opiniones', async (req, res) => {
  const { nombre, email, calificacion, comentario } = req.body;

  if (!nombre || !email || !calificacion || !comentario) {
    return res.status(400).json({ success: false, message: 'Todos los campos son requeridos' });
  }

  if (calificacion < 1 || calificacion > 5) {
    return res.status(400).json({ success: false, message: 'La calificación debe ser entre 1 y 5' });
  }

  let connection;
  try {
    connection = await getConnection();

    const insertResult = await connection.query(
      'INSERT INTO Opiniones (nombre, email, calificacion, comentario) OUTPUT INSERTED.id VALUES (?, ?, ?, ?)',
      [nombre, email, calificacion, comentario]
    );

    const nuevoId = insertResult && insertResult[0] ? insertResult[0].id : null;

    res.json({
      success: true,
      message: 'Opinión publicada correctamente',
      opinionId: nuevoId
    });

  } catch (err) {
    console.error('Error publicando opinión:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) {}
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log('Asegúrate de tener configurado el archivo .env con tus credenciales de SQL Server');
});
