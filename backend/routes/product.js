//import { Router } from 'express';
//const router = Router();


//mport { getProducts } from '../controllers/productController';


const express = require('express')
const router = express.Router();




const { getProducts } = require ('../controllers/productController')






router.route('/products').get(getProducts);


module.exports = router;