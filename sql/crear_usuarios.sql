USE [BlessedStore];
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Usuarios')
BEGIN
    CREATE TABLE Usuarios (
        id INT IDENTITY(1,1) PRIMARY KEY,
        nombre NVARCHAR(100) NOT NULL,
        email NVARCHAR(255) NOT NULL UNIQUE,
        password NVARCHAR(255) NOT NULL,
        rol NVARCHAR(50) DEFAULT 'cliente',
        activo BIT DEFAULT 1,
        fecha_creacion DATETIME DEFAULT GETDATE()
    );
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Opiniones')
BEGIN
    CREATE TABLE Opiniones (
        id INT IDENTITY(1,1) PRIMARY KEY,
        nombre NVARCHAR(100) NOT NULL,
        email NVARCHAR(255) NOT NULL,
        calificacion INT NOT NULL CHECK (calificacion BETWEEN 1 AND 5),
        comentario NVARCHAR(MAX) NOT NULL,
        fecha_creacion DATETIME DEFAULT GETDATE()
    );
END
GO

INSERT INTO Usuarios (nombre, email, password, rol)
VALUES ('Admin Blessed', 'admin@blessedcarteras.cl', 'admin123', 'admin');
GO
