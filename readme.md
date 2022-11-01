
## Documentação da API utilizando DAO

### Retorna todos os usuários

```
  GET /users
```
### Retorna explicação de como cadastrar novo usuário

```
  GET /users/novoUser
```
### Cadastra novo usuário

```
  POST /users/novoUser
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do usuário que será cadastrado |

### Retorna todos os produtos

```
  GET /api/produtos
```
### Cadastra novo produto

```
  POST /api/novoProduto
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do produto que será cadastrado |
| `preco` | `string` | **Obrigatório**. O preço do produto que será cadastrado |

### Retorna uma mensagem de boas vindas

```
  GET /api/hello
```

### Retorna uma mensagem de boas vindas com o nome passado na requisição

```
  GET /api/hello/nome
```
## Documentação da API utilizando banco de dados postgres
### Chamada do token para utilização
```
  POST /login
```
Body (x-www-form):
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `user` | `string` | seu usuário |
| `password` | `string` | sua senha |

### Lista todos os produtos

```
  GET /api2/produtos
```
![Exemplo utilização: ](https://res.cloudinary.com/practicaldev/image/fetch/s--2aCuBfFH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://s5.gifyu.com/images/postgresql-06.gif)

### Cadastra novo produto

```
  POST /api2/novoproduto
```
Body (x-www-form):
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do produto que será cadastrado |
| `quantidade` | `interger` | **Obrigatório**. O preço do produto que será cadastrado |
| `preco` | `numeric` | **Obrigatório**. O preço do produto que será cadastrado |
Headers:
| Key            | Value                           |
| :----------    | :------------------------------ |
| `Content-Type` | application/json                |
| `x-access-token` | **Token recebido pela chamada /login** |

![Exemplo utilização: ](https://res.cloudinary.com/practicaldev/image/fetch/s--vEe4jhLh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://s5.gifyu.com/images/postgresql-04.gif)

### Listar produtos pelo ID

```
  GET /api2/produtos/:id
```
![Exemplo utilização: ](https://res.cloudinary.com/practicaldev/image/fetch/s--pXy9pLeZ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://s5.gifyu.com/images/postgresql-07.gif)

### Atualizar um produto pelo ID

```
  PUT /api2/attproduto/:id
```
Body (x-www-form):
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do produto que será cadastrado |
| `quantidade` | `interger` | **Obrigatório**. O preço do produto que será cadastrado |
| `preco` | `numeric` | **Obrigatório**. O preço do produto que será cadastrado |
Headers:
| Key            | Value                           |
| :----------    | :------------------------------ |
| `Content-Type` | application/json                |
| `x-access-token` | **Token recebido pela chamada /login** |

![Exemplo utilização: ](https://res.cloudinary.com/practicaldev/image/fetch/s--D0J0mHVt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://s5.gifyu.com/images/postgresql-08.gif)

### Deletar um produto pelo ID

```
  DELETE /api2/rmproduto/:id
```
Headers:
| Key            | Value                           |
| :----------    | :------------------------------ |
| `Content-Type` | application/json                |
| `x-access-token` | **Token recebido pela chamada /login** |

![Exemplo utilização: ](https://res.cloudinary.com/practicaldev/image/fetch/s--D0J0mHVt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://s5.gifyu.com/images/postgresql-08.gif)


## Considerações 

### Documentações utilizadas
https://dev.to/azure/desenvolvendo-uma-aplicacao-crud-node-js-com-postgresql-3clk


### Sqls utilizados direto no banco
```
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    quantidade INTEGER NOT NULL,
    preco NUMERIC(10,2)
);
```