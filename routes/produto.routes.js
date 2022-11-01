const router = require('express-promise-router')();
const { verifyJWT } = require('../controllers/auth.controller');
const productController = require('../controllers/produto.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota home 
router.get('/', productController.home);

// ==> Rota responsável por criar um novo 'Produtos': (POST): localhost:3000/api2/novoproduto
router.post('/novoproduto',verifyJWT, productController.createProduct);

// ==> Rota responsável por listar todos os 'Produtos': (GET): localhost:3000/api2/produtos
router.get('/produtos', productController.listAllProducts);

// ==> Rota responsável por selecionar 'Produtos' pelo 'Id': (GET): localhost:3000/api2/produtos/:id
router.get('/produtos/:id', productController.findProductById);

// ==> Rota responsável por atualizar 'Produtos' pelo 'Id': (PUT): localhost: 3000/api2/attproduto/:id
router.put('/attproduto/:id',verifyJWT, productController.updateProductById);

// ==> Rota responsável por excluir 'Produtos' pelo 'Id': (DELETE): localhost:3000/api2/produtos/:id
router.delete('/rmprodutos/:id',verifyJWT, productController.deleteProductById);

module.exports = router;