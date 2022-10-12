//Conteúdo o arquivo api.js
var express = require('express');
var router = express.Router();

/*criando alguns objetos para manipular no DAO*/
var Produto = require('../model/Produto');
var ProdutoDAO = require('../model/ProdutoDAO');
let produto1 = new Produto(0,'Notebook', 5000);
let produto2 = new Produto(1,'Iphone', 4000);
let produto3 = new Produto(2,'Monitor', 1000);
let produto4 = new Produto(3,'Mouse', 200);
let produto5 = new Produto(4,'Teclado', 300);

let DAO = new ProdutoDAO();

DAO.add(produto1);
DAO.add(produto2);
DAO.add(produto3);
DAO.add(produto4);
DAO.add(produto5);

/* GET users listing. */
//Aqui vamos colocar as nossas rotas da API
router.get('/produtos',function(req,res,next){
    res.send(DAO.all());
});//retorna todos os produtos

router.post('/novoProduto/', function(req, res, next){
    var produto = req.body;
    //ver se é um objeto ou um lista
    /*1 == '1' ->igual
    1 === '' --> !=
    */
    //produto.preco = req.body.preco;
    if(produto.nome == null || produto.nome == 'undefined' || produto.preco == null || produto.preco == 'undefined'){
        res.send(400, {erro: 'sem parâmetro (nome) de entrada'});
    }else{
        produto.id = DAO.getNextID();
        DAO.add(produto);
        res.status(201).send("Novo produto adicionado: " + produto.nome);
    }

});


function atendeGetHello (req, res, next) {
    
    res.send('Bem vindo, API Desenvolvida por Ruan Delatorre!!!');
}    
//Rotas de teste
router.get('/hello',atendeGetHello);

router.get('/hello/:nome', function(req, res, next){
    //para pegar o parâmetro nome
    var nome = req.params.nome;
    res.send('Bem vindo '+ nome +', API Desenvolvida por Ruan Delatorre!!!');
});


module.exports = router;