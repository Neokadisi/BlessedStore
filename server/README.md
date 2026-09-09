# Servidor BlessedCarteras

Backend Node.js para autenticación con SQL Server.

## Requisitos

- Node.js >= 14.x
- SQL Server (local o remoto)
- Base de datos configurada con la tabla `Usuarios`

## Instalación

1. Abrir una terminal en la carpeta `server/`
2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar el archivo `.env` con tus credenciales de SQL Server:
   ```env
   DB_SERVER=localhost
   DB_NAME=BlessedCarteras
   DB_USER=sa
   DB_PASSWORD=tu_password
   DB_ENCRYPT=false
   DB_TRUST_SERVER_CERTIFICATE=true
   PORT=3000
   ```

## Configurar SQL Server

1. Abrir SQL Server Management Studio o Azure Data Studio
2. Ejecutar el script `sql/crear_usuarios.sql` para crear la tabla y un usuario de prueba
3. Usuario de prueba creado:
   - Email: `admin@blessedcarteras.cl`
   - Contraseña: `admin123`

## Iniciar el servidor

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## Rutas

- `POST /api/login` - Iniciar sesión
  - Body: `{ email, password }`
  - Retorna: `{ success, message, usuario }`

- `POST /api/registro` - Registrar nuevo usuario
  - Body: `{ nombre, email, password }`
  - Retorna: `{ success, message, usuarioId }`
