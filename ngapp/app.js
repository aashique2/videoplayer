const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 3000,
    app = express(),
    api = require('./server/routes/api');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/dist/ngapp'));
app.use('/api',api);
app.use('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/ngapp/index.html'));
});

app.listen(port,()=>{
    console.log('Listening to the port '+port);
});