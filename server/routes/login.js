var express = require('express');
var router = express.Router();

const ENDPOINT = require("../endpoint");
const login = require('../login');

router.post(ENDPOINT.LOGIN, login);

module.exports = router;
