const express = require('express');
const app = express();
const path = require('path');
// const db = require("./models/db");

require('./config/config');
require('./startup/prod') (app);
require('./models/db');
// db.sequelize.sync();

app.use(express.static(path.join(__dirname, './dist/client')));
require('./startup/routes') (app);
const port = process.env.PORT || 8080;
app.listen( port,() => console.log(`Server Started On Port : ${port}`));