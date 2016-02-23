'use strict';
var express = require('express');
var burgers = express.Router();

var app = express();
var dumpMethod = (req,res)=>res.send( req.method + " burgers! // METHOD NOT IMPLEMENTED" );
var test = 'testing';

burgers.route('/')
  .get((req,res)=>res.send(test + ' burger homepage'))
  .post(dumpMethod)
  .put(dumpMethod)
  .delete(dumpMethod);

// burgers.get('/burgers', (req,res)=>res.send(test + ' burgers'));
// burgers.post('/burgers', dumpMethod);
// burgers.put('/burgers', dumpMethod);
// burgers.delete('/burgers', dumpMethod);

burgers.get('/burgers/:id', (req,res)=>res.send(test + ' burger/id'));
burgers.post('/burgers/:id', dumpMethod);
burgers.put('/burgers/:id', dumpMethod);
burgers.delete('/burgers/:id', dumpMethod);
// app.use( '/burgers', burgerRoutes)

burgers.get('/burgers/new', (req,res)=>res.send(test + ' burger'));
burgers.post('/burgers/new', dumpMethod);
burgers.put('/burgers/new', dumpMethod);
burgers.delete('/burgers/new', dumpMethod);

burgers.get('/burgers/:id/edit', (req,res)=>res.send(test + ' burger/ID/edit'));
burgers.post('/burgers/:id/edit', dumpMethod);
burgers.put('/burgers/:id/edit', dumpMethod);
burgers.delete('/burgers/:id/edit', dumpMethod);

module.exports = burgers;
