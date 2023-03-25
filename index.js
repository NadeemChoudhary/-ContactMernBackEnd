
require('dotenv').config();
require('./DbConnection');
const cors = require("cors");
const express = require('express');
const server = express();
const { UserRouter } = require('./Routes/UsersRoute');
const {  ProductRouter } = require('./Routes/ProductRoute');
//body Parser ;
server.use(express.json());
server.use(cors());

    

// console.log(ProductsRouter)
server.use('/products', ProductRouter);
server.use('/users' , UserRouter);
server.listen(process.env.PORT, () => console.log(process.env.PORT, 'running'));