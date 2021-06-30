const express = require('express')
const app = express();
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
dotenv.config();

const Researcher = require('./researcher.route');

//monoDB connection
const PORT = process.env.PORT || 8086;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useCreateIndex :true,
    useNewUriParser :true,
    useUnifiedTopology : true,
    useFindAndModify : false
}, (error) => {
    if(error){
        console.log("Database Error occured",error.message);
    }

});

mongoose.connection.once('open', () => {
    console.log('Database sync success')
});

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/researcher',Researcher);

app.listen(PORT, () =>{
    console.log("Server is listning on port "  + PORT);
})