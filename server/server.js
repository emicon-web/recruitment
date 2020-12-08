const express = require('express');
const app = express();
const path = require('path');

require('./config/config');
require('./startup/prod') (app);
require('./models/db');

app.use(express.static(path.join(__dirname, './dist/client')));
require('./startup/routes') (app);

app.listen(process.env.PORT ,() => console.log(`Server Started On Port : ${process.env.PORT}`));