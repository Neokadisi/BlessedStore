require('dotenv').config();
const express = require('express');
const Database = require('better-sqlite3');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('..'));

const DB_PATH = path.join(__dirname, 'blessedstore.db');
const db = new Database(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS Usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    rol TEXT DEFAULT 'cliente',
    activo INTEGER DEFAULT 1,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Opiniones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    calificacion INTEGER NOT NULL CHECK (calificacion BETWEEN 1 AND 5),
    comentario TEXT NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('Base de datos SQLite inicializada en:', DB_PATH);

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email y contraseÃ±a son requeridos' });
  }

  try {
    const stmt = db.prepare('SELECT id, nombre, email, password, rol, activo FROM Usuarios WHERE email = ? AND activo = 1');
    const usuario = stmt.get(email);

    if (!usuario) {
      return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }

    const passwordValida = await bcrypt.compare(password, usuario.password);

    if (!passwordValida) {
      return res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }

    res.json({
      success: true,
      message: 'Login exitoso',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
      }
    });
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
});

app.post('/api/registro', async (req, res) => {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).json({ success: false, message: 'Todos los campos son requeridos' });
  }

  if (password.length < 6) {
    return res.status(400).json({ success: false, message: 'La contraseÃ±a debe tener al menos 6 caracteres' });
  }

  try {
    const existe = db.prepare('SELECT id FROM Usuarios WHERE email = ?').get(email);
    if (existe) {
      return res.status(400).json({ success: false, message: 'El email ya estÃ¡ registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const info = db.prepare(
      "INSERT INTO Usuarios (nombre, email, password, rol) VALUES (?, ?, ?, 'cliente')"
    ).run(nome, email, hashedPassword);

    res.json({
      success: true,
      message: 'Registro exitoso',
      usuarioId: info.lastInsertRowid
    });
  } catch (err) {
    console.error('Error en registro:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
});

app.get('/api/perfil/:id', (req, res) => {
  const userId = req.params.id;

  try {
    const stmt = db.prepare('SELECT id, nombre, email, rol, fecha_creacion FROM Usuarios WHERE id = ? AND activo = 1');
    const usuario = stmt.get(userId);

    if (!usuario) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

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
  }
});

app.get('/api/opiniones', (req, res) => {
  try {
    const stmt = db.prepare('SELECT id, nombre, calificacion, comentario, fecha_creacion FROM Opiniones ORDER BY fecha_creacion DESC');
    const opiniones = stmt.all();

    res.json({
      success: true,
      opiniones: opiniones || []
    });
  } catch (err) {
    console.error('Error obteniendo opiniones:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
});

app.post('/api/opiniones', (req, res) => {
  const { nombre, email, calificacion, comentario } = req.body;

  if (!nombre || !email || !calificacion || !comentario) {
    return res.status(400).json({ success: false, message: 'Todos los campos son requeridos' });
  }

  if (calificacion < 1 || calificacion > 5) {
    return res.status(400).json({ success: false, message: 'La calificaciÃ³n debe ser entre 1 y 5' });
  }

  try {
    const info = db.prepare(
      'INSERT INTO Opiniones (nombre, email, calificacion, comentario) VALUES (?, ?, ?, ?)'
    ).run(nome, email, calificacion, comentario);

    res.json({
      success: true,
      message: 'OpiniÃ³n publicada correctamente',
      opinionId: info.lastInsertRowid
    });
  } catch (err) {
    console.error('Error publicando opiniÃ³n:', err);
    res.status(500).json({ success: false, message: 'Error del servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log('Base de datos SQLite lista');
});
