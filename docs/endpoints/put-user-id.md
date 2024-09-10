# Endpoint: `PUT /user/{id}`

Permite actualizar completamente la información de un usuario existente mediante su identificador único.

## Parámetros de URL
`{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Parámetros del Cuerpo (JSON)
-  (obligatorio): Identificador único del tema que se desea recuperar.
- `nombre` (obligatorio): Nombre del actualizado usuario.
- `apellido` (obligatorio): Apellido del actualizado usuario.
- `nombre_usuario` (obligatorio): Nombre de usuario a actualizar .
- `correo_electronico` (obligatorio): Correo electrónico del usuario a actualizado .
- `contrasena` (obligatorio): Contraseña del usuario a actualizado.

## Ejemplo de Solicitud
```http
PUT /user/1
Content-Type: application/json

{
  "nombre": "NuevoNombre",
  "apellido": "NuevoApellido",
  "nombre_usuario": "nuevo_usuario",
  "correo_electronico": "nuevo.correo@email.com",
  "contrasena": "nueva_contrasena"
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 1,
  "mensaje": "Usuario actualizado exitosamente."
}

```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el usuario."
  }

  ```

- Código 400 Bad Request:
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