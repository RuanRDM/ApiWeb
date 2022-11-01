const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
//authentication
exports.logout = async (req, res)=> {
    res.json({ auth: false, token: null });
}

exports.login = async (req, res)=> {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'luiz' && req.body.password === '123'){
        //auth ok
        const id = 1; //esse id viria do banco de dados
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300 // expires in 5min
        });
        return res.json({ auth: true, token: token });
      }
      
      res.status(500).json({message: 'Login inválido!'});
  }

exports.verifyJWT = function(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' })
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' })
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    })
  };