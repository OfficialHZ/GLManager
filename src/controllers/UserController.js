const UserModel = require('../models/user');

class UserController
{
    /**
     * Recupera una colección de valores de un recurso:
     * 
     * ```http
     *   GET /user
     *   Accept: application/json
     * ```
     */
    static async indexGet(req, res) {
        let data = await UserModel.consultar();
        res.send(data);
    }

    /**
     * Recibe una petición para crear un recurso:
     * 
     * ```http
     *   POST /user
     *   Content-Type: application/json
     *
     *   {"nombre":"Nuevo usuario"}
     * ```
     */
    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await UserModel.insertar(newData);

            res.status(201)
                .header('Location', `/user/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    /**
     * Recupera el valor de un recurso individual:
     * 
     * ```http
     *   GET /user/{id}
     *   Accept: application/json
     * ```
     */
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await UserModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    /**
     * Recibe un petición para sustituir/reemplazar un recurso:
     * 
     * ```http
     *   PUT /user/{id}
     *   Content-Type: application/json
     *
     *   {"nombre":"Nombre del usuario sustituto"}
     * ```
     * 
     * > **NOTA**  
     * > Los valores que no se reciban serán sustituidos con su valor
     * > predeterminado o vacío, según corresponda.
     */
    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;

            const result = await UserModel.reemplazar(id, updatedData);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Updated successfully'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request'});
        }
    }

    /**
     * Recibe una petición para actualizar parte de un recurso:
     * 
     * ```http
     *   PATCH /user/{id}
     *   Content-Type: application/json
     * 
     *   {"nombre": "Nuevo nombre del usuario"}
     * ```
     */
    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await UserModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    /**
 * Recibe una petición para eliminar un recurso:
 * 
 * ```http
 *   DELETE /user/{id}
 *   Accept: application/json
 * ```
 */
static async itemDelete(req, res) {
    try {
        const id = req.params.id;

        const result = await UserModel.eliminar(id);

        if (result === 0) {
            res.status(404).send({ errno: 404, error: 'Not found' });
        } else {
            res.send({ message: 'Deleted successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({ errno: 400, error: 'Bad Request' });
    }
}

}

module.exports = UserController;