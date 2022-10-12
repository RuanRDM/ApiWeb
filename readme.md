
## Documentação da API

### Retorna todos os usuários

```bash
  GET /users
```
### Retorna explicação de como cadastrar novo usuário

```bash
  GET /users/novoUser
```
### Cadastra novo usuário

```bash
  POST /users/novoUser
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do usuário que será cadastrado |

### Retorna todos os produtos

```bash
  GET /api/produtos
```
### Cadastra novo produto

```bash
  POST /api/novoProduto
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome do produto que será cadastrado |
| `preco` | `string` | **Obrigatório**. O preço do produto que será cadastrado |

### Retorna uma mensagem de boas vindas

```bash
  GET /api/hello
```

### Retorna uma mensagem de boas vindas com o nome passado na requisição

```bash
  GET /api/hello/nome
```

