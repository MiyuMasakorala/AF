const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Researcher = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    date: {
        type: Date,
        required:true ,
        default:Date.now
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    cpassword: {
        type: String
    }
}, {
    collation: 'researcher'
});

module.exports = mongoose.model('Researcher',Researcher);