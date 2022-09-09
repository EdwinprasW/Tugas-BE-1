const { handlerGetAllUser } = require("./handler");

const express = Require('express');
const router = express.Router();

//Get User
router.get('/', handlerGetAllUser);

module.exports = router;