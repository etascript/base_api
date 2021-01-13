/*/********************************
    Controller: Usuarios
    Autor: Sebastián Cortés
/*//******************************/

//Imports
var store = require('./store');
var bcrypt = require('bcrypt');

const getOne = (id) => {
    return new Promise(async(resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false
        }
        const result = await store.listOne(id);
        if(!result) {
            reject('Invalid');
        }
        resolve(result);
    });
}

const getAll = () => {      
    return store.listAll();
}

const saveData = async (body) =>{
    return new Promise(async(resolve, reject) => {
        if (!body) {
            console.error('[Message controller] No info')
            reject('Datos erróneos!');
            return false
        }
        
        let pass = await bcrypt.hash(body.password, 10);
        const newData = {
            username : body.username,
            email: body.email,
            password : pass
        };
        store.save(newData);
        resolve(newData);
    });
}

const updateData = (id, body) => {
    const newData = {
        _id : id,
        username : body.username,
        email: body.email,
        password : body.password
    };
    return new Promise(async(resolve, reject) => {
        if (!id ) {
            reject('Invalid data 666');
            return false;
        }
        const result = await store.update(newData);
        resolve(result);
    });
}

const deleteData = (id) =>{
    return new Promise(async(resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false
        }
        const result = await store.delete(id);
        resolve(result);
    });
}

const getBotis = (id) =>{
    return new Promise(async(resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false
        }
        const result = await store.getBotiforUser(id);
        resolve(result);
    });
}

//Export
module.exports = {
    getOne,
    getAll,
    saveData,
    updateData,
    deleteData,
    getBotis
}