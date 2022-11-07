const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const db = require("../config/database");
//authentication
exports.logout = async (req, res)=> {
    res.json({ auth: false, token: null });
}

exports.login = async (req, res)=> {
    //busca user no banco de dados
    const { user, password } = req.body;
    const response  = await db.query('SELECT * FROM usuarios WHERE "user"=$1 AND password=$2', [user, password]);
    
    //esse teste abaixo deve ser feito no seu banco de dados
    if(response.rows != ""){
        //auth ok
        process.env.SECRET = req.body.password
        const id = req.body.user; //esse id viria do banco de dados
        const token = jwt.sign({ id }, req.body.password,{
          expiresIn: 300 // expires in 5min
        });
        return res.json({ auth: true, token: token });
      }
      
      res.status(500).json({message: 'Login inválido!'});
  }

exports.verifyJWT = function(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'Sem token.' })
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Falha na autenticação do token.' })
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    })
  };