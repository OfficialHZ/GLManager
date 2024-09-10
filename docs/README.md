# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                   | Descripción |
| ------------------------- | ----------- |
| `GET /user`               | Recupera la lista de todos los usuarios disponibles.|
| `GET /user/{id}`          | Obtiene información detallada sobre un usuario específico. [Detalles](./endpoints/get-user-id.md) |
| `POST /user`              | Crea un nuevo usuario. [Detalles](./endpoints/post-user.md) |
| `PUT /user/{id}`          | Actualiza completamente la información de un usuario existente. [Detalles](./endpoints/put-user-id.md) |
| `PATCH /user/{id}`        | Actualiza parcialmente la información de un usuario existente. [Detalles](./endpoints/patch-user-id.md) |
| `DELETE /user/{id}`       | Elimina un usuario existente. [Detalles](./endpoints/delete-user-id.md) |
| `GET /product`            | Recupera la lista de todos los productos disponibles.|
| `GET /product/{id}`       | Obtiene información detallada sobre un producto específico. [Detalles](./endpoints/get-product-id.md) |
| `POST /product`           | Crea un nuevo producto. [Detalles](./endpoints/post-product.md) |
| `PUT /product/{id}`       | Actualiza completamente la información de un producto existente. [Detalles](./endpoints/put-product-id.md) |
| `PATCH /product/{id}`     | Actualiza parcialmente la información de un producto existente. [Detalles](./endpoints/patch-product-id.md) |
| `DELETE /product/{id}`    | Elimina un producto existente. [Detalles](./endpoints/delete-product-id.md) |
| `GET /reginv`             | Recupera la lista de todos los registros de inventario disponibles.|
| `GET /reginv/{id}`        | Obtiene información detallada sobre un registro de inventario específico. [Detalles](./endpoints/get-reginv-id.md) |
| `POST /reginv`            | Crea un nuevo registro de inventario. [Detalles](./endpoints/post-reginv.md) |
| `PUT /reginv/{id}`        | Actualiza completamente la información de un registro de inventario existente. [Detalles](./endpoints/put-reginv-id.md) |
| `PATCH /reginv/{id}`      | Actualiza parcialmente la información de un registro de inventario existente. [Detalles](./endpoints/patch-reginv-id.md) |
| `DELETE /reginv/{id}`     | Elimina un registro de inventario existente. [Detalles](./endpoints/delete-reginv-id.md) |
| `GET /product/{id}/reginv`| Obtiene la lista de registros de inventario asociados a un producto específico. [Detalles](./endpoints/get-product-id-reginv.md) |
