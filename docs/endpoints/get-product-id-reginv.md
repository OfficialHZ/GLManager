# Endpoint: `GET /product/{id}/reginv`

Permite obtener información sobre los productos relacionados a un registro mediante su
identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del tema que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /product/1/reginv
```

## Respuesta Exitosa (Código 200 OK)
```json
[
  {
    "id_registro":1,
    "id_producto":1,
    "id_usuario":1,
    "fecha_registro":"2023-12-05T00:19:06.000Z"
  }
  ]
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontraron productos asociados con el registro {id}."
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
  sobre los libros de un tema en específico.