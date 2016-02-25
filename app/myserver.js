'use strict';
var path = require('path');
var express    = require('express');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3002;
// parse incoming forms
/* we'll be reading the form body,
but not accepting files, or anything more than text*/
app.use( bodyParser.urlencoded({ extended: false }));
/* we'll convert everything we receive into json,
for our convenience */
app.use( bodyParser.json());

// override with POST having ?_method=XXXX
/* e.g. If we need to make a PUT,
we'll POST to a url appended with ?_method=put */
app.use(methodOverride('_method'));


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
