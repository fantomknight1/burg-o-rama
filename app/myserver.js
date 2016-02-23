'use strict';
var path = require('path');
var express    = require('express');
var logger     = require('morgan');

var app = express();
var port = process.env.PORT || 3002;

var dumpMethod = (req,res)=>res.send( req.method + " burgers! // METHOD NOT IMPLEMENTED" );
var burgerRoutes = require( path.join(__dirname, '/routes/burgers'));
var test = 'testing';


app.use( '/burgers', burgerRoutes);

app.get('/', (req,res)=>res.send(test + ' homepage'));
app.post('/', dumpMethod);
app.put('/', dumpMethod);
app.delete('/', dumpMethod);

app.listen(port,()=>
  console.log('stuff', port,'//', new Date())
);
