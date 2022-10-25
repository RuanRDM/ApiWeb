
## Documentação da API

### Retorna todos os usuários

```http
  GET /users
```
### Retorna explicação de como cadastrar novo usuário

```http
  GET /users/novoUser
```
### Cadastra novo usuário

```http
  POST /users/novoUser
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do usuário que será cadastrado |

### Retorna todos os produtos

```http
  GET /api/produtos
```
### Cadastra novo produto

```http
  POST /api/novoProduto
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do produto que será cadastrado |
| `preco` | `string` | **Obrigatório**. O preço do produto que será cadastrado |

### Retorna uma mensagem de boas vindas

```http
  GET /api/hello
```

### Retorna uma mensagem de boas vindas com o nome passado na requisição

```http
  GET /api/hello/nome
```


### Documentações utilizadas
https://dev.to/azure/desenvolvendo-uma-aplicacao-crud-node-js-com-postgresql-3clk


### Sqls utilizados direto no banco
```
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INTEGER NOT NULL,
    preco NUMERIC(5,2)
);

select * from produtos
INSERT INTO produtos (nome, quantidade, preco) VALUES ('tv', 2, '250.00')
```