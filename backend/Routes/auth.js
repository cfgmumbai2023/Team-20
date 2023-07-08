const express = require('express');
const router = express.Router();

const {authCheck} = require('../Middleware/auth');