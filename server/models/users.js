const mongooose = require('mongoose');
const bcrypt = require('bcrypt');

const usersSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    status: {
        type: Boolean,
        required: true
    }
},
{
    timestamps: true
})


saltSecret:String;
usersSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(this.password, salt, (err,hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
})

const Users = mongooose.model('Users',usersSchema);

// module.exports = (sequelize, Sequelize) => {
//     const Users = sequelize.define("users", {
//     name: {
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     password: {
//         type: Sequelize.BOOLEAN
//     },
//     status: {
//         type: Sequelize.STRING
//     }
//     });

//     return Users;
// };