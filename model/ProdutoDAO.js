const Produto = require('./Produto');

module.exports =  class ProdutoDAO{
    constructor(  ){
        this.produtos = [];
    }

    add(produto){
        this.produtos[produto.id] = produto;
    }

    get(id){
        return this.produtos[id];
    }

    remove(id){
        this.produtos.splice(id,1);
    }

    update(produto){
        this.produtos[produto.id] = produto;
    }

    all(){
        return this.produtos;

    }

    getNextID(){

        return this.produtos.length;
    }

}