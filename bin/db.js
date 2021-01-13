const db = require('mongoose');
db.Promise = global.Promise;
// const url = 'mongodb+srv://bd_user_sebazofia:hhwbngQS53vx@cluster0-wcc0t.mongodb.net/pruebas?retryWrites=true&w=majority';
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
    console.log('DB ok')
}

module.exports = connect;