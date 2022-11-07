const db = require("../config/database");
var auth = require("./auth.controller");
// ==> Método home:
exports.home = async (req, res) => {
  res.send('Bem vindo, API de operações CRUD no banco de dados');
}

// ==> Método responsável por criar um novo 'Product':
exports.createProduct = async (req, res) => {
  const { nome, quantidade, preco } = req.body;
  const { rows } = await db.query(
    "INSERT INTO produtos (nome, quantidade, preco) VALUES ($1, $2, $3)",
    [nome, quantidade, preco]
  );

  res.status(201).send({
    message: "Produto cadastrado com sucesso!",
    body: {
      product: { nome, quantidade, preco }
    },
  });
};

// ==> Método responsável por listar todos os 'Products':
exports.listAllProducts = async (req, res) => {
    const response = await db.query('SELECT * FROM produtos ORDER BY nome ASC');
    res.status(200).send(response.rows);
  };

// ==> Método responsável por selecionar 'Product' pelo 'Id':
exports.findProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM produtos WHERE id = $1', [id]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Product' pelo 'Id':
exports.updateProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, quantidade, preco } = req.body;

  const response = await db.query(
    "UPDATE produtos SET nome = $1, quantidade = $2, preco = $3 WHERE id = $4",
    [nome, quantidade, preco, id]
  );

  res.status(200).send({ message: "Produto atualizado com sucesso!" });
};

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM produtos WHERE id = $1', [
    id
  ]);

  res.status(200).send({ message: 'Produto deletado com sucesso!', id });
};