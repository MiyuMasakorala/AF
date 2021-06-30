const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Workshop = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    cpassword: {
        type: String
    },
	role: {
        type: String
    },
	status: {
        type: String,
		default: "pending"
    },
	filename: {
        type: String
    }
}, {
    collation: 'workshopAcc'
});

module.exports = mongoose.model('Workshop',Workshop);