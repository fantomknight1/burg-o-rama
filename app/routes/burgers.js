'use strict';
var express = require('express');
var burgers = express.Router();

var dumpMethod = (req,res)=>res.send( req.method + " burgers! // METHOD NOT IMPLEMENTED" );
var test = 'testing';

var burgerData = [];

burgers.route('/')
  .get((req,res)=>res.send({data:burgerData}))
  .post((req,res)=>{
    burgerData.push(req.body);

    var newID = burgerData.length-1;
  	res.redirect('./burgers/'+ newID);
  });
burgers.route('/new')
  .get((req,res)=>res.send(test + ' burger'));

burgers.route('/:burgerID')
  .get((req,res)=>{
    console.log('burger id');
    var bID = req.params.burgerID;
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }
    // res.send({data:burgerData[bID]});
    console.log(burgerData);
    res.send({data:burgerData[bID]});

  })
  .put((req,res)=>{
    var bID = req.params.burgerID;
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }
    burgerData[bID] = req.body;

    res.redirect(303, './' + bID);
  })
  .delete((req, res) => {
    var bID = req.params.burgerID;
    if(!(bID in burgerData)){
      res.sendStatus(404);
      return;
    }
    burgerData[bID]
    res.redirect(303, './');
});
// app.use( '', burgerRoutes)

burgers.route('/:burgerID/edit')
  .get((req,res)=>res.send(test + ' burger/ID/edit'));


module.exports = burgers;
