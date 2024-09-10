# Endpoint: `DELETE /user/{id}`

Permite eliminar un usuario existente mediante su identificador único.

## Parámetros de URL
`{id}` (obligatorio): Identificador único del usuario que se desea eliminar.


## Ejemplo de Solicitud
```http
DELETE /user/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 1,
  "mensaje": "Usuario eliminado exitosamente."
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