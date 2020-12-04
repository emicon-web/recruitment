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

// hashing the password 
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