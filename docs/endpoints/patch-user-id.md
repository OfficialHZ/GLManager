# Endpoint: `PATCH /user/{id}`

Permite actualizar parcialmente la información de un usuario existente mediante su identificador único.

## Parámetros de URL
-  `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Parámetros del Cuerpo (JSON)
Puedes incluir cualquier combinación de los siguientes campos para actualizar:
- `nombre`: Nombre actualizado del usuario.
- `apellido`: Apellido actualizado del usuario.
- `nombre_usuario`: Nombre de usuario actualizado.
- `correo_electronico`: Correo electrónico actualizado.

## Ejemplo de Solicitud
```http
PATCH /user/1
Content-Type: application/json

{
  "nombre": "NuevoNombre",
  "correo_electronico": "nuevo.correo@email.com"
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
  "error_description": "No se proporcionaron campos válidos para actualizar."
  }
  ``` 


- Código 500 Internal Server Error:
  ```json
  {
  "errno": 400,
  "error": "bad_request",
  "error_description": "No se proporcionaron campos válidos para actualizar."
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un tema en específico.