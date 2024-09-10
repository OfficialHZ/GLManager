# Endpoint: `PUT /product/{id}`

Permite actualizar completamente la información de un producto existente mediante su identificador único.

## Parámetros de URL
`{id}` (obligatorio): Identificador único del producto que se desea actualizar.

## Parámetros del Cuerpo (JSON)
- `nombre` (obligatorio): Nombre actualizado del producto.
- `tipo` (obligatorio): Tipo actualizado del producto.
- `cantidad` (obligatorio): Cantidad actualizada del producto.
- `unidad_medida` (obligatorio): Unidad de medida actualizada del producto.
- `descripcion`: Descripción actualizada del producto.
- `nivel_critico`: Nivel crítico actualizado del producto.
- 
## Ejemplo de Solicitud
```http
PUT /product/1
Content-Type: application/json

{
  "nombre": "Manzanas Verdes",
  "tipo": "Fruta",
  "cantidad": 800,
  "unidad_medida": "Unidad",
  "descripcion": "Variedad: Granny Smith",
  "nivel_critico": 200
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_registro": 1,
  "mensaje": "Producto actualizado exitosamente."
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