const mongoose = require('mongoose');

var PostDetails = mongoose.model('PostDetails',{
    title: {
        type:String,
        required:true
    },

    description: {
        type:String,
        required: true
    },
    date: {
        type:String,
        required:true
    },
    venue:{
        type:String,
        required: true
    }
})

module.exports = {
    PostDetails
}