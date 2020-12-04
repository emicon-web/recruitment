const router = require("express").Router();
const auth = require('../middleware/auth');
const { updateCandidate ,getSpecificCandidates , addCandidate, getCandidates } = require('../controllers/candidate.controller');

router.post('/add-candidate',auth,addCandidate);
router.get('/get-candidates',auth, getCandidates);
router.get('/get-specific-candidate/:id',auth, getSpecificCandidates);
router.put('/update-candidate/:id',auth,updateCandidate);

module.exports = router;