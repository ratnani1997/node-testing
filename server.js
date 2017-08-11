const express = require('express');
var app = express();
const path = require('path');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
var {getLocalTime} = require(path.join ( __dirname , 'utils', 'time.js'));

var publicPath = path.join(__dirname  , 'public');
app.use(express.static(publicPath));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname , 'public', 'index.html'))
})

app.post('/sending',urlencodedParser,  (req, res)=>{
    getLocalTime(req.body);
})

app.listen(3000, ()=>{
    console.log(`Listening to port 3000`);
})

