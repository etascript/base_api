/*/********************************
    Controller: Authorization
    Autor: Sebastián Cortés
/*//******************************/

//Imports
var store = require('./store');
var bcrypt = require('bcrypt');
var auth = require('../../helpers/auth');

const login = async (username, password) =>{    
    const data = await store.checkUser(username);
    return bcrypt.compare(password, data.password)
    .then(comparador =>{
        if(comparador === true){
            //generar token
            return {
                data: data,                
                token: auth.sign(data)
            };
        }else{
            throw new Error('Información Errónea');
        }  
    });
};

module.exports = {
    login
}