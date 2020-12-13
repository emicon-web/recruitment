module.exports = function(err,req,res,next){
    res.status(500).json({
        type: "Something Went Wrong",
        msg: err
    })
}