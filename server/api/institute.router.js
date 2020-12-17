const router = require("express").Router();
const auth = require('../middleware/auth');
const { addInstitute, getInstitutes,changeInstituteStatus } = require('../controllers/institute.controller');

router.post('/add-institute',auth,addInstitute);
router.get('/get-institute',auth, getInstitutes);
router.post('/change-institute-status',auth,changeInstituteStatus);

module.exports = router;