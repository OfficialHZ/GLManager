-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS greenlink;

-- Usar la base de datos
USE greenlink;

-- Crear tabla para los productos
CREATE TABLE productos (
    id_producto         INTEGER         NOT NULL AUTO_INCREMENT,
    nombre              VARCHAR(255)    NOT NULL,
    tipo                VARCHAR(50)     NOT NULL,
    cantidad            INTEGER         NOT NULL,
    unidad_medida       VARCHAR(20)     NOT NULL,
    descripcion         TEXT,
    nivel_critico       INTEGER,
    PRIMARY KEY (id_producto)
);

-- Crear tabla para usuarios
CREATE TABLE usuarios (
    id_usuario          INTEGER         NOT NULL AUTO_INCREMENT,
    nombre              VARCHAR(100)    NOT NULL,
    apellido            VARCHAR(100)    NOT NULL,
    nombre_usuario      VARCHAR(50)     NOT NULL,
    correo_electronico  VARCHAR(255)    NOT NULL,
    contrasena          VARCHAR(255)    NOT NULL,
    PRIMARY KEY (id_usuario)
);

-- Crear tabla para registros de inventario
CREATE TABLE registros_inventario (
    id_registro         INTEGER         NOT NULL AUTO_INCREMENT,
    id_producto         INTEGER         NOT NULL,
    id_usuario          INTEGER         NOT NULL,
    fecha_registro      TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_registro),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Insertar datos en la tabla de productos
INSERT INTO productos (nombre, tipo, cantidad, unidad_medida, descripcion, nivel_critico) VALUES
    ('Manzanas', 'Fruta', 1000, 'Unidad', 'Variedad: Fuji', 200),
    ('Zanahorias', 'Verdura', 500, 'Kilogramo', 'Origen: Local', 100),
    ('Cajas de Embalaje', 'Material de Trabajo', 200, 'Caja', 'Dimensiones: 30x30x20 cm', 50);

-- Insertar datos en la tabla de usuarios
INSERT INTO usuarios (nombre, apellido, nombre_usuario, correo_electronico, contrasena) VALUES
    ('Juan', 'Perez', 'juan123', 'juan.perez@email.com', 'contraseña123'),
    ('Ana', 'Gomez', 'ana456', 'ana.gomez@email.com', 'contraseña456');

-- Insertar datos en la tabla de registros de inventario
INSERT INTO registros_inventario (id_producto, id_usuario) VALUES
    (1, 1),
    (2, 2),
    (3, 1);
