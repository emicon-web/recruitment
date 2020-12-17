require('../models/institute');
const _ = require('lodash');
const mongoose = require('mongoose');
const Institute = mongoose.model('Institute');


module.exports.addInstitute =  async (req,res,next) => {
    const institute = await Institute.findOne({ $or : [
        {'instituteName':req.body.instituteName},
        {'universityOfTheInstitute':req.body.universityOfTheInstitute}
    ]});
    if(institute) return res.status(400).json({ type: "Invalid", msg: "Institute Data is Already in Database"});

    newInstitute = new Institute(_.pick(req.body,['instituteName','universityOfTheInstitute','instituteTpoName','instituteTpoPhoneNumber','instituteTpoEmail','instituteStatus','address','instituteAddedBy','canidateCollege']));

    await newInstitute.save((err, doc) => {
        if(!err) {
            res.status(200).json({ success : true, msg: "Institute Added" });
        }
        else { return next(err); }
    });
}

module.exports.getInstitutes =  async (req,res,next) => {
    const institute = await Institute.find({});
    res.status(200).json({ success : true, institute: institute });
}

module.exports.changeInstituteStatus =  async (req,res,next) => {
    const institute = await Institute.updateOne({'instituteName':req.body.name},{$set:{'instituteStatus': req.body.status}});
    res.status(200).json({success : true});
}
