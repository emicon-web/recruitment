const express = require('express');
const app = express();
const path = require('path');
// const db = require("./models/db");

require('./config/config');
require('./startup/prod') (app);
require('./models/db');
// db.sequelize.sync();

// app.use(express.static(path.join(__dirname, './dist/client')));
require('./startup/routes') (app);
const port = process.env.PORT || 3000;
// app.listen( port,() => console.log(`Server Started On Port : ${port}`));


app.listen( port,err=>{
    if(err){console.log(err);}
    console.log(`Server Started On Port : ${port}`);
})