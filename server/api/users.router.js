const router = require("express").Router();

const { signupUser ,loginUser,allUsers } = require('../controllers/users.controller');

// normal signup
router.post('/signup', signupUser);

// login
router.post('/login' , loginUser);

router.get('/all-users', allUsers);
module.exports = router;