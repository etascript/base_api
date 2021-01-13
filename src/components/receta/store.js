var Model = require('./model');

const getAll = async() =>{
    let dataObject = {};
    try {
        const dataObject =  await Model.find();
        return dataObject;
    } catch (error) {
        console.error('[Error: ]', error);
    } 
};

const getOne = async(id) =>{
    try {
        const result = await Model.findById(id);
        return result;
    } catch (error) {
        console.error('[Error: ]', error);
    } 
};

const addData = async(newData) =>{
    try {
        const dataSaved = new Model(newData);
        return await dataSaved.save();
    } catch (error) {
        console.error('[Error: ]', error);
    }
};

const updateData = async(newData) => {
    try{
        const foundedData = await Model.findOne({
            _id : newData._id,
        })
        foundedData.titulo = newData.titulo,
        foundedData.descripcion = newData.descripcion,
        foundedData.imagen_principal = newData.imagen_principal,
        foundedData.ingredientes = newData.ingredientes,
        foundedData.pasos = newData.pasos
        // foundedData.creador = newData.creador
        const resultado = await foundedData.save();
        return resultado;
    }catch (error) {
        console.error('[Error: ]', error);
    }    
};

const deleteData = async(id) => {
    try{
        const mjs = {
            data : await Model.findByIdAndDelete({
            _id: id
        }),
        mensaje : `Receta eliminada`,
    }
        return mjs;
    }catch (error) {
        console.error('[Error: ]', error);
    } 
};

module.exports = {
    listOne : getOne,
    listAll : getAll,
    save : addData,
    update : updateData,
    delete : deleteData
}