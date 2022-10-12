var express = require('express');
var router = express.Router();

/*criando alguns objetos para manipular no DAO*/
var User = require('../model/User');
var UserDAO = require('../model/UserDAO');

let User1 = new User(0, 'Ruan');
let User2 = new User(1, 'Elder');
let User3 = new User(2, 'Lucas');
let User4 = new User(3, 'Pedro');

let DAO = new UserDAO();

DAO.add(User1);
DAO.add(User2);
DAO.add(User3);
DAO.add(User4);


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(DAO.all());
});//sem contexto também retorna todos os users

module.exports = router;

//adicionar novo usuário
function novoUser(req, res, next) {

  res.send('Para adicionar um novo usuário adicione por post passando o nome por parametro body (nome)');
}
//Rotas de teste
router.get('/novoUser', novoUser);


router.post('/novoUser/', function (req, res, next) {
  //pegando os dados no corpo da requisição
  var user = req.body;

  if (user.nome == null || user.nome == 'undefined') {
    res.send(400, { erro: 'sem parâmetro (nome) de entrada' });
  } else {
    user.id = DAO.getNextID();
    DAO.add(user);
    res.status(201).send("Novo usuário adicionado: " + user.nome);
  }

});