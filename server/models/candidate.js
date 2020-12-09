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
    },
    candidateHistory : []
},
{
    timestamps: true
})

const Candidate = mongooose.model('Candidate',candidateSchema);

// module.exports = (sequelize, Sequelize) => {
//     const Candidate = sequelize.define("candidate", {
//     consultantImage: {
//         type: Sequelize.STRING
//     },
//     consultantName: {
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.BOOLEAN
//     },
//     location: {
//         type: Sequelize.STRING
//     },
//     preferredLocation: {
//         type: Sequelize.BOOLEAN
//     },
//     phoneNumber: {
//         type: Sequelize.STRING
//     },
//     panNumber: {
//         type: Sequelize.BOOLEAN
//     },
//     adharNumber: {
//         type: Sequelize.STRING
//     },
//     skillSet: {
//         type: Sequelize.BOOLEAN
//     },
//     yearOfExperience: {
//         type: Sequelize.BOOLEAN
//     },
//     resume: {
//         type: Sequelize.STRING
//     }
//     });

//     return Candidate;
// };