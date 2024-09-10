# Endpoint: `GET /user/{id}`

Permite obtener información detallada sobre un usuario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /user/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_usuario": 1,
  "nombre": "Juan",
  "apellido": "Perez",
  "nombre_usuario": "juan123",
  "correo_electronico": "juan.perez@email.com"
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

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un tema en específico.