const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const config = require('./config/config')[env];
const express = require('express');
const app = express();

mongoose.connect(config.databaseURL,
    { useNewUrlParser: true ,
     useUnifiedTopology: true },
     (err) =>{
    if(err){
        console.log(err);
    }
    console.log('Database connected');
})

require('./config/express')(app);
require('./routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));