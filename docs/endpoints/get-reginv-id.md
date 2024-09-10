# Endpoint: `GET /reginv/{id}`

Permite obtener información detallada sobre un registro de inventario específico mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del registro de inventario que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /reginv/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_registro": 1,
  "id_producto": 2,
  "id_usuario": 1,
  "fecha_registro": "2023-12-06T12:34:56Z"
}

```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
  "errno": 404,
  "error": "not_found",
  "error_description": "No se encontró el registro de inventario."
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