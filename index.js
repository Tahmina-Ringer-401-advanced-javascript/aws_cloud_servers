'use strict';

require('dotenv').config();
const server = require('./src/server');

server.start(process.env.PORT);




// 2. make a model
const Flower  = mongoose.model('Flower', flowerSchema);

// model is a way of interacting with our collection

// made a new entry in the database
const dahlia = new Flower({ name: 'Dahlia' });

// takes time to hit the database!
// async code!
dahlia.save().then(() => console.log('flowers are pretty'));

// getting-started.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

require('dotenv').config();
const server = require('./src/server');

server.start(process.env.PORT)

const dbSchema = new mongoose.Schema({
  name: String
});