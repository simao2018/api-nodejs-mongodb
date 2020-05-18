const mongoose = require('mongoose');

const tacheShema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minLength : 1,
        trim : true
    },
    _listId: {
        type : mongoose.Types.ObjectId,
        require : true
    }

});

const Tache = mongoose.model('Tache', tacheShema);

module.exports = {Tache};