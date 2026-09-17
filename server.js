require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { pool } = require('./db');

const app = express();
app.use(cors());
app.use(express.json()); // permite recibir JSON en el body

// Servir los archivos de tu página web (HTML, CSS, JS) desde esta misma carpeta
app.use(express.static(__dirname));

const SALT_ROUNDS = 10;

// ===== Sesiones (necesario para login con Google) =====
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// ===== Configuración de Google OAuth =====
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.serializeUser((usuario, done) => done(null, usuario));
passport.deserializeUser((usuario, done) => done(null, usuario));

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.emails[0].value;
      const nombre_completo = profile.displayName;

      let resultado = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
      let usuario;

      if (resultado.rows.length === 0) {
        await pool.query(
          `INSERT INTO usuarios (nombre_completo, email, contrasena, rol, fecha_creacion)
           VALUES ($1, $2, NULL, $3, NOW())`,
          [nombre_completo, email, 'cliente']
        );
        resultado = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
      }

      usuario = resultado.rows[0];

      done(null, {
        id_usuario: usuario.id_usuario,
        nombre_completo: usuario.nombre_completo,
        email: usuario.email,
        rol: usuario.rol
      });
    } catch (err) {
      done(err, null);
    }
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login.html' }),
  (req, res) => {
    res.redirect('/auth-success.html');
  }
);

app.get('/api/me', (req, res) => {
  if (req.user) {
    res.json({ usuario: req.user });
  } else {
    res.status(401).json({ error: 'No hay sesión activa' });
  }
});

// Endpoint para registrar un nuevo usuario
app.post('/api/registro', async (req, res) => {
  const { nombre_completo, email, contrasena, rol } = req.body;

  if (!nombre_completo || !email || !contrasena) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  try {
    const contrasenaEncriptada = await bcrypt.hash(contrasena, SALT_ROUNDS);

    await pool.query(
      `INSERT INTO usuarios (nombre_completo, email, contrasena, rol, fecha_creacion)
       VALUES ($1, $2, $3, $4, NOW())`,
      [nombre_completo, email, contrasenaEncriptada, rol || 'cliente']
    );

    res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
  } catch (err) {
    console.error('Error al insertar usuario:', err);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Endpoint para iniciar sesión
app.post('/api/login', async (req, res) => {
  const { email, contrasena } = req.body;

  if (!email || !contrasena) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  try {
    const resultado = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);

    if (resultado.rows.length === 0) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
    }

    const usuario = resultado.rows[0];
    const coincide = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!coincide) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
    }

    res.status(200).json({
      mensaje: 'Inicio de sesión exitoso',
      usuario: {
        id_usuario: usuario.id_usuario,
        nombre_completo: usuario.nombre_completo,
        email: usuario.email,
        rol: usuario.rol
      }
    });
  } catch (err) {
    console.error('Error al iniciar sesión:', err);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
