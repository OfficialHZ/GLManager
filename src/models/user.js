const { connectMysql } = require('../dbconnection');
class UserModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('usuarios');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('usuarios').where('id_usuario', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('usuarios').insert(datos).returning('id_usuario');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('usuarios').where('id_usuario', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_usuario'] = id;
        await db('usuarios').where('id_usuario', id).del();
        await db.insert(newData).into('usuarios');
        return id;
    }

    static async eliminar(id) {
        let db = await connectMysql();
        return await db('usuarios').where('id_usuario', id).del();
    }
}

module.exports = UserModel;