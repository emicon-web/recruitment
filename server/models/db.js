const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex: true } ,
    (err) => {
    if(!err) { console.log('Mongo DB connected succeeded'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined , 2)); }
});

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
//   host: process.env.HOST,
//   dialect: process.env.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: process.env.pool.max,
//     min: process.env.pool.min,
//     acquire: process.env.pool.acquire,
//     idle: process.env.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

// module.exports = db;