const express = require('express');
const router = express.Router();

const {authCheck} = require('../Middleware/auth');
const {signup} = require('../Controller/auth');

//Route to register
router.post('/signup' , authCheck , signup);

module.exports = router;