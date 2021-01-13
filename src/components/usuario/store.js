var Model = require('./model');


const getAll = async() =>{
    let dataObject = {};
    try{
        dataObject = await Model.find();
        return dataObject;
    }catch (error) {
        console.error('[Error: ]', error);
    }    
}

const getOne = async(id) =>{
    try {
        const result = await Model.findById(id);
        return result;
    } catch (error) {
        console.error('[Error: ]', error);
    } 
}

const addData = async(newData) => {
    try {
        const dataSaved = new Model(newData);
        return await dataSaved.save();
    } catch (error) {
        console.error('[Error: ]', error);
    }
}

const updateData = async(newData) => {
    try{
        const foundedData = await Model.findOne({
            _id : newData._id,
        })
        foundedData.username = newData.username,
        foundedData.email = newData.email,
        foundedData.password = newData.password,
        foundedData.role = newData.role
        const resultado = await foundedData.save();
        return resultado;
    }catch (error) {
        console.error('[Error: ]', error);
    }    
}

const deleteData = async (id) => {
    try{
        const mjs = {
            data : await Model.findByIdAndDelete({
            _id: id
        }),
        mensaje : `Usuario eliminado`,
    }
        return mjs;
    }catch (error) {
        console.error('[Error: ]', error);
    }
}

//custom methods
const getBotiforUser = async (id) =>{
    try{
        // var respuesta = {};
        const objUser =  await Model.findOne({_id: id})
        console.log(objUser.favoritos.length)
        var botiData = [];
        for (let i = 0; i < objUser.favoritos.length; i++){            
            botiData.push(await botiModel.findById(objUser.favoritos[i]));
        }
        console.log(botiData);
        const msj = {
            data : botiData
        }
        return msj;
    }catch (error) {
        console.error('[Error: ]', error);
    }
};

module.exports = {
    listOne : getOne,
    listAll : getAll,
    save : addData,
    update : updateData,
    delete : deleteData,
    getBotiforUser
}