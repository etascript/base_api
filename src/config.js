module.exports = {
    database: {
        URI: 'mongodb+srv://recetario_web:recetario@clustergcp.wcc0t.mongodb.net/recetario?retryWrites=true&w=majority'
        },
    port: 5001,
    jwt:{
        secret: process.env.JWT_SECRET || 'secretkey12345645!'
    }
    
}