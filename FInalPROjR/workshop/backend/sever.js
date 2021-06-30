const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const dotenv = require('dotenv');

const mongoose = require('mongoose');

const Workshop = require('./workshop.route');


dotenv.config();
mongoose.Promise = global.Promise;
const MONGODB_URI= process.env.MONGODB_URI;

//crate db connection
mongoose.connect(MONGODB_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false

},(error)=>{
    if(error)
    {
        console.log('Database error',error);
    }

});

//open db connection'
mongoose.connection.once('open',()=>{
    console.log('Database Connected ');
});


app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/workshop',Workshop);

app.listen(PORT, function(){
    console.log('Server is running on port: ',PORT);
});

