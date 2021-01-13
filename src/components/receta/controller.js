/*/********************************
    Controller: Receta 
    Autor: Sebastián Cortés
/*//******************************/

//Imports
var store = require('./store');
// var auth = require('../../helpers/auth');
//Métodos
const getOne = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false
        }
        const result = await store.listOne(id);
        resolve(result);
    });
}

const getAll = () => {
    return store.listAll();
}

const saveData = (body) => {
    return new Promise((resolve, reject) => {
        if (!body) {
            console.error('[Message controller] No info')
            reject('Datos erróneos!');
            return false
        }

        // let sid = {
        //     sid_user: objData.data._id
        // }
        const newData = {
            // sid_boti: sid.sid_boti,
            titulo: body.titulo,
            descripcion: body.descripcion,
            imagen_principal: body.imagen_principal,
            ingredientes: body.ingredientes,
            pasos: body.pasos,
            // creador: sid.sid_user,
        };
        store.save(newData);
        resolve(newData);
    });
}

const updateData = (id, body) => {
    const newData = {
        _id: id,
        titulo: body.titulo,
        descripcion: body.descripcion,
        imagen_principal: body.imagen_principal,
        ingredientes: body.ingredientes,
        pasos: body.pasos,
        // creador: sid.sid_user,
    };
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid data 666');
            return false;
        }
        const result = await store.update(newData);
        resolve(result);
    });
}

const deleteData = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false
        }
        const result = await store.delete(id);
        resolve(result);
    });
}

//Export
module.exports = {
    getOne,
    getAll,
    saveData,
    updateData,
    deleteData
}