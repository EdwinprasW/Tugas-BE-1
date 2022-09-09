const { handlerGetAllUser, handlerPostUser, handlerUpdUser, handlerDelUser, handlerSrchUserID, handlerSrchUserNM } = require("./handler");

const express = require('express');
const router = express.Router();

//Get User
router.get('/', handlerGetAllUser);
router.get('/search', handlerSrchUserNM);
router.get('/:id', handlerSrchUserID);
router.post('/', handlerPostUser);
router.put('/:id', handlerUpdUser);
router.delete('/:id', handlerDelUser);

module.exports = router;