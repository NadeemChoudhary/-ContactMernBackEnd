const express = require('express');
const file = require('../Controller/UsersControll.js');
const UserRouter = express.Router();

UserRouter
    .get('/', file.Read)
    .get('/Single/:id', file.Single)
    .post('/create', file.add)
    .patch('/update/:id', file.Update)
    .delete('/del/:id', file.Delete);



module.exports = { UserRouter }