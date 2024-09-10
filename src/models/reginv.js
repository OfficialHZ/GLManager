const { connectMysql } = require('../dbconnection');
class RegInvModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('registros_inventario');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('registros_inventario').where('id_registro', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('registros_inventario').insert(datos).returning('id_registro');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('registros_inventario').where('id_registro', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_registro'] = id;
        await db('registros_inventario').where('id_registro', id).del();
        await db.insert(newData).into('registros_inventario');
        return id;
    }

    static async consultarPorProductoId(idProducto) {
        let db = await connectMysql();
        return await db('registros_inventario').where('id_producto', idProducto);
    }
    
    static async eliminar(id) {
        let db = await connectMysql();
        return await db('registros_inventario').where('id_registro', id).del();
    }
}

module.exports = RegInvModel;