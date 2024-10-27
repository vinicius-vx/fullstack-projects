const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
  const tokenHeader = req.headers['authorization'];
  const token = tokenHeader && tokenHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: 'Invalid token',
    });
  }

  try {
    jwt.verify(token, 'ahjldfglaskujdghçadikfjhgç');
    next();
      
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: 500,
      message: 'Expired token'
    });
  }

};

module.exports = {
  tokenVerify
};