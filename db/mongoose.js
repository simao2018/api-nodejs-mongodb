const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/taskManager', {useNewUrlParser : true, useUnifiedTopology: true}).then(()=>{
    console.log('MongoDB OK');
}).catch((e)=>{
    console.log('Mongodb erreur :'+e);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};