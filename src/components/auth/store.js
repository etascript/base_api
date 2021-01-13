var UserModel = require('../usuario/model')

const checkUser = async(username)=>{
    let result = await UserModel.findOne({ username : username}, (err, userData)=>{
        if(!userData){
            result = {message: "NO DATA", error : err}            
        }    
    });
    return result;
}

module.exports = {
    checkUser,
}