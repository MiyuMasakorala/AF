require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var postDetailsRouter = require('./controllers/postDetailsController');

var app = express()
app.use(bodyParser.json())
app.use(cors ({origin:`http://localhost:1234`}))
app.listen(4000,()=>console.log(`Server started at :4000`))

app.use('/createDetails',postDetailsRouter);