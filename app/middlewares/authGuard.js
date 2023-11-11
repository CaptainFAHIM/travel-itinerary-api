const jwt = require('jsonwebtoken');
const __res_ = require('../utils/helpers/send-response');
const secretKey = process.env.JWT_SECRET;

const authGuard = (req, res, next) => {
  
  const token = req.headers.authorization;

  if (!token) {
    return __res_.out(req, res, {
        status: false,
        statusCode: 400,
        message: "Unauthorized User!",
    });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authGuard;
