# Endpoint: `PATCH /reginv/{id}`

Permite actualizar parcialmente la información de un registro de inventario existente mediante su identificador único.

## Parámetros de URL
-  `{id}` (obligatorio): Identificador único del registro de inventario que se desea actualizar.

## Parámetros del Cuerpo (JSON)
- `id_producto`: IIdentificador único del producto asociado al registro.
- `id_usuario`: Identificador único del usuario que registra el inventario.

## Ejemplo de Solicitud
```http
PATCH /reginv/1
Content-Type: application/json

{
  "id_producto": 2
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_registro": 1,
  "mensaje": "Registro de inventario actualizado exitosamente."
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
  "errno": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }

  ``` 

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un tema en específico.