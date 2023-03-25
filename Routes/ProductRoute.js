
const express = require('express');
const func = require('../Controller/Products.js')
const ProductRouter = express.Router();
ProductRouter
    .get( "/all" ,func.ReadProduct)
    .get('/:id', func.singleProducts)
    .post('/add', func.add)
    .put('/update/:id', func.Update)
    .put('/update/:id', func.Reupdate)
    .delete('/delete/:id', func.Delete);

module.exports = { ProductRouter }