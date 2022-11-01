const router = require('express-promise-router')();
const authController = require('../controllers/auth.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Funcionando!' });
});

// ==> Definindo as rotas da autenticação
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
