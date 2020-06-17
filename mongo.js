
const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const connectionURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@softuni-4mwlq.gcp.mongodb.net/Cubes?retryWrites=true&w=majority`;
mongoose.connect(connectionURL);
const client = MongoClient(connectionURL);