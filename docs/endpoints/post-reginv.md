# Endpoint: `POST /reginv`

Permite crear un nuevo registro de inventario.

## Parámetros del Cuerpo (JSON)
- `id_producto` (obligatorio): Identificador único del producto asociado al registro.
- `id_usuario` (obligatorio): Identificador único del usuario que registra el inventario.

## Ejemplo de Solicitud
```http
POST /reginv
Content-Type: application/json

{
  "id_producto": 3,
  "id_usuario": 2
}
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_registro": 4,
  "mensaje": "Registro de inventario creado exitosamente."
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