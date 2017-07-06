const express = require('express');
const app = express();
// const bodyParser = require('body-parser')

var json = {};

app.get('/api/todos', function(req, res){
  res.json([]);
});

app.post('/api/todos', function(req, res){
  res.json([]);
});

app.put('/api/todos/:id', function(req, res){
});

app.patch('api/todos/:id', function(req, res){
  res.json([]);
});

app.delete('/api/todos/:id', function(req, res){
  res.json([]);
});

app.listen(3000, function(){
  console.log('Hey, bacon time!');
});
