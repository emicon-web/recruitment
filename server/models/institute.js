const mongooose = require('mongoose');

const instituteSchema = new mongooose.Schema({
    instituteName: {
        type : String,
        required : true,
    },
    universityOfTheInstitute: {
        type : String,
        required : true,
    },
    instituteTpoName: {
        type : String,
        required : true,
    },
    instituteTpoPhoneNumber: {
        type : String,
        required : true,
    },
    instituteTpoEmail: {
        type : String,
        required : true,
    },
    instituteStatus: {
        type :Boolean,
        required : true,
    },
    instituteAddedBy: {
        type : String,
        required : true
    },
    address : {
    line1 : {
        type : String,
        required : true
    },
    line2 : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    pinCode : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    }
    }
},
{
    timestamps: true
})
const Institute = mongooose.model('Institute', instituteSchema);