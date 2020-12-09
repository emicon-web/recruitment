require('../models/candidate');
const _ = require('lodash');
const mongoose = require('mongoose');
const Candidate = mongoose.model('Candidate');
var multer=require("multer");


// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(req.file);
//         cb(null, '../uploads/');
//     },
//     filename: (req, file, cb) => {
//         console.log(req.file)
//     var filetype = '';
//     if(file.mimetype === 'image/gif') {
//         filetype = 'gif';
//     }
//     if(file.mimetype === 'image/png') {
//         filetype = 'png';
//     }
//         if(file.mimetype === 'image/jpeg') {
//         filetype = 'jpg';
//     }

//     cb(null, 'image-' + Date.now() + '.' + filetype);
//     }
// });


// var upload = multer({storage: storage}).single('consultantImage');


const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => { // setting destination of uploading files        
      if (file.fieldname === "resume") { // if uploading resume
        cb(null, 'resumes');
      } else { // else uploading image
        cb(null, 'images');
    }
    },
    filename: (req, file, cb) => { // naming file
        cb(null, file.fieldname+"-");
    }
});

const fileFilter = (req, file, cb) => {
    if (file.fieldname === "resume") { // if uploading resume
        if (
        file.mimetype === 'application/pdf' ||
        file.mimetype === 'application/msword' ||
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) { // check file type to be pdf, doc, or docx
        cb(null, true);
      } else {
        cb(null, false); // else fails
      }
    } else { // else uploading image
      if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
      ) { // check file type to be png, jpeg, or jpg
        cb(null, true);
      } else {
        cb(null, false); // else fails
      }
    }
  };



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let extension = file.originalname.split('.')[file.originalname.split('.').length - 1];
        if(extension == "JPG" || extension == "JPEG" || extension == "jpg" || extension == "jpeg" ||
        extension == "PNG" || extension == "png"){
            cb(null, '/uploads/images');
        }else{
            cb(null, '/uploads/resumes');
        }
        
    },
    filename: (req, file, cb) => {
        let extension = file.originalname.split('.')[file.originalname.split('.').length - 1];

        if(extension == "JPG" || extension == "JPEG" || extension == "jpg" || extension == "jpeg" ||
        extension == "PNG" || extension == "png"){
            cb(null, 'image-' + Date.now() + '.' + extension);
        }else{
            cb(null, 'resume-' + Date.now() + '.' + extension);
        }
    }
});


const Upload = multer({storage: storage}).any();

module.exports.getCandidates =  async (req,res,next) => {
    let candidates = [];
    const candidate = await Candidate.find({});
    if(!candidate) return res.status(400).json({ type: "Invalid", msg: "There are No Candidates"});
    for(let i = 0 ; i < candidate.length; i++){
        if(candidate[i].candidateHistory.length == 0){
            candidates.push(candidate[i]);
        }else{
        candidates.push(candidate[i].candidateHistory[candidate[i].candidateHistory.length-1]);
        }
    }
    res.status(200).json({ success : true, candidates: candidates });
}

module.exports.addCandidate =  async (req,res,next) => {
    // Upload(req, res,async function (err) {
    //     if (err) {
    //         return res.status(422).send("an Error occured")
    //     }
            
        const candidate = await Candidate.findOne({ $or : [
            {'email':req.body.email},
            {'phoneNumber':req.body.phoneNumber},
            // {'panNumber':req.body.panNumber},
            {'adharNumber':req.body.adharNumber}
        ]});
        console.log(req.body);
        if(candidate) return res.status(400).json({ type: "Invalid", msg: "Candidate Data is Already in Database"});

        newCandidate = new Candidate(_.pick(req.body,['consultantName','email','location','preferredLocation','phoneNumber','panNumber','adharNumber','skillSet','yearOfExperience','consultantImage','resume']));

        console.log(newCandidate);
        // newCandidate.consultantImage = '../../../../uploads/' + req.files[0].filename;
        // newCandidate.resume = '../../../../uploads/' + req.files[1].filename;
        await newCandidate.save((err, doc) => {
            if(!err) {
                res.status(200).json({ success : true, msg: "Candidate Added" });
            }
            else { return next(err); }
        });
    // });
    
}


// module.exports.addCandidate =  async (req,res,next) => {
//     upload(req, res,async function (err) {
//         if (err) {
//             return res.status(422).send("an Error occured")
//         }
//         console.log(req.file);
//         const candidate = await Candidate.findOne({ $or : [
//             {'email':req.body.email},
//             {'phoneNumber':req.body.phoneNumber},
//             {'panNumber':req.body.panNumber},
//             {'adharNumber':req.body.adharNumber}
//         ]});
        
//         if(candidate) return res.status(400).json({ type: "Invalid", msg: "Candidate Data is Already in Database"});

//         newCandidate = new Candidate(_.pick(req.body,['consultantName','email','location','preferredLocation','phoneNumber','panNumber','adharNumber','skillSet','yearOfExperience','consultantImage']));

//         newCandidate.consultantImage = '../../../../uploads/' + req.file.filename;
//         await newCandidate.save((err, doc) => {
//             if(!err) {
//                 res.status(200).json({ success : true, msg: "Candidate Added" });
//             }
//             else { return next(err); }
//         });
//     });
    
// }

module.exports.getSpecificCandidates =  async (req,res,next) => {
    const can = await Candidate.findOne({'_id':req.params.id});
    if(!can) return res.status(400).json({ type: "Invalid", msg: "Something Went Wrong"});
    console.log(can.candidateHistory.length);
    if(can.candidateHistory.length == 0){
        res.status(200).json({ success : true, can });
    }else{
    let candidate = can.candidateHistory[can.candidateHistory.length-1];
    res.status(200).json({ success : true, candidate });
    }
}

module.exports.updateCandidate =  async (req,res,next) => {
    // const candidate = await Candidate.findByIdAndUpdate(req.params.id,{$set: req.body});
    // res.status(200).json({ success : true, candidate });
    const candidate = await Candidate.findOne({_id : req.params.id});
    candidate.candidateHistory.push(req.body);
    console.log(candidate);
    await candidate.save((err, doc) => {
        if(!err) {
            res.status(200).json({ success : true, msg: "Candidate Updated" });
        }
        else { return next(err); }
    })
}


