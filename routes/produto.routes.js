const router = require('express-promise-router')();
const productController = require('../controllers/produto.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/produtos', productController.createProduct);


// ==> Rota responsável por listar todos os 'Products': (GET): localhost:3000/api/products
router.get('/produtos', productController.listAllProducts);

module.exports = router;