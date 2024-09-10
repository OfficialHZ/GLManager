const { connectMysql } = require('../dbconnection');
class ProductModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('productos');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('productos').where('id_producto', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('productos').insert(datos).returning('id_producto');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('productos').where('id_producto', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_producto'] = id;
        await db('productos').where('id_producto', id).del();
        await db.insert(newData).into('productos');
        return id;
    }

    static async eliminar(id) {
        let db = await connectMysql();
        return await db('productos').where('id_producto', id).del();
    }
}

module.exports = ProductModel;