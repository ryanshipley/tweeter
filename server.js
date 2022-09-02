const express = require("express");
const app = express();
const mongoose = require("mongoose");
let DATABASE_URL = "mongodb+srv://admin:abc1234@cluster0.5imhdly.mongodb.net/?retryWrites=true&w=majority";
const db = mongoose.connection;
mongoose.connect(DATABASE_URL);
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(3000);