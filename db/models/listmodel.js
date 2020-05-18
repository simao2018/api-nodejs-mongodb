const mongoose = require('mongoose');

const ListShema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minLength : 1,
        trim : true
    }
});

const List = mongoose.model('List', ListShema);

module.exports = {List};