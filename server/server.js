const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
// const db = require("./models/db");

require('./config/config');
require('./startup/prod') (app);
require('./models/db');
// db.sequelize.sync();

app.use(express.static(path.join(__dirname, './dist/client')));
require('./startup/routes') (app);

app.listen(process.env.PORT ,() => console.log(`Server Started On Port : ${process.env.PORT}`));