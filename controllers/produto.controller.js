const db = require("../config/database");

// ==> Método responsável por criar um novo 'Product':

exports.createProduct = async (req, res) => {
  const { product_name, quantity, price } = req.body;
  const { rows } = await db.query(
    "INSERT INTO produtos (nome, quantidade, preco) VALUES ($1, $2, $3)",
    [product_name, quantity, price]
  );

  res.status(201).send({
    message: "Product added successfully!",
    body: {
      product: { product_name, quantity, price }
    },
  });
};

// ==> Método responsável por listar todos os 'Products':
exports.listAllProducts = async (req, res) => {
    const response = await db.query('SELECT * FROM produtos ORDER BY nome ASC');
    res.status(200).send(response.rows);
  };