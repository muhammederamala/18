const jwt = require('jsonwebtoken');

function checkJwtValidity(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Token not provided' });
  }

  try {
    const decoded = jwt.verify(token, 'jwt-key');
    req.user = decoded;
    next();

  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized - Invalid token',token:token });
  }
}

module.exports = checkJwtValidity;
