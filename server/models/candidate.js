const mongooose = require('mongoose');

const candidateSchema = new mongooose.Schema({
    consultantImage: {
        type : String,
        // required : true,
    },
    consultantName: {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 25
    },
    email: {
        type: String,
        required: true,
        maxlength: 255
    },
    location: {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 25
    },
    preferredLocation: {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 25
    },
    phoneNumber : {
        type : Number,
        required : true,
        minlength : 10,
        maxlength : 10
    },
    panNumber : {
        type : Number,
        required : true,
        minlength : 10,
        maxlength : 10
    },
    adharNumber : {
        type : Number,
        required : true,
        minlength : 12,
        maxlength : 12
    },
    skillSet : {
        type : String,
        required : true
    },
    yearOfExperience : {
        type : Number,
        required : true
    },
    resume : {
        type : String,
        // required : true
    }
},
{
    timestamps: true
})

const Candidate = mongooose.model('Candidate',candidateSchema);