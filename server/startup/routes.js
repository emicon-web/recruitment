// require('express-async-errors');
const bodyParser = require("body-parser");
const cors = require('cors');

const error = require('../middleware/error');
const candidate = require('../api/candidate.router');
const users = require('../api/users.router');



module.exports = function(app){
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(cors());
    
    app.use('/users',users);
    app.use('/candidate',candidate);
    app.use(error);
}