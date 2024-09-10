# Endpoint: `POST/user`

Permite crear un nuevo usuario.

## Parámetros del Cuerpo (JSON)
- `nombre` (obligatorio): Nombre del nuevo usuario.
- `apellido` (obligatorio): Apellido del nuevo usuario.
- `nombre_usuario` (obligatorio): Nombre de usuario del nuevo usuario.
- `correo_electronico` (obligatorio): Correo electrónico del nuevo usuario.
- `contrasena` (obligatorio): Contraseña del nuevo usuario.

## Ejemplo de Solicitud
```http
POST /user/{id}
Content-Type: application/json

{
  "nombre": "Nuevo",
  "apellido": "Usuario",
  "nombre_usuario": "nuevo123",
  "correo_electronico": "nuevo.usuario@email.com",
  "contrasena": "nueva_contrasena"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 4,
  "mensaje": "Usuario creado exitosamente."
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 400,
  "error": "bad_request",
  "error_description": "Faltan parámetros obligatorios en la solicitud."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un tema en específico.