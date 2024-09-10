# Endpoint: `POST /product`

Permite crear un nuevo producto.

## Parámetros del Cuerpo (JSON)
- `nombre` (obligatorio): Nombre del nuevo producto.
- `tipo` (obligatorio): Tipo del nuevo producto.
- `cantidad` (obligatorio): Cantidad inicial del nuevo producto.
- `unidad_medida` (obligatorio): Unidad de medida del nuevo producto.
- `descripcion`: Descripción opcional del nuevo producto.
- `nivel_critico`: Nivel crítico opcional del nuevo producto.

## Ejemplo de Solicitud
```http
POST /product
Content-Type: application/json

{
  "nombre": "Peras",
  "tipo": "Fruta",
  "cantidad": 500,
  "unidad_medida": "Unidad",
  "descripcion": "Variedad: Conference",
  "nivel_critico": 100
}

```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_producto": 4,
  "mensaje": "Producto creado exitosamente."
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