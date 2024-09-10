# Endpoint: `PATCH /product/{id}`

Permite actualizar parcialmente la información de un producto existente mediante su identificador único.

## Parámetros de URL
-  `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Parámetros del Cuerpo (JSON)
Puedes incluir cualquier combinación de los siguientes campos para actualizar:
- `nombre`: Nombre actualizado del producto.
- `tipo`: Tipo actualizado del producto.
- `cantidad`: Cantidad actualizada del producto.
- `unidad_medida`: Unidad de medida actualizada del producto.
- `descripcion`: Descripción actualizada del producto.
- `nivel_critico`: Nivel crítico actualizado del producto.

## Ejemplo de Solicitud
```http
PATCH /product/1
Content-Type: application/json

{
  "cantidad": 1200,
  "nivel_critico": 300
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
  "error_description": "No se encontró el producto."
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