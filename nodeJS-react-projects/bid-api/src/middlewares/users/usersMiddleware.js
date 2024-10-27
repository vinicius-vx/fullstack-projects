const isValidEmail = require('../../commons/validationEmail');

const validateFields = (req, res, next) => {
  const { body } = req;

  if (body.name === undefined) {
    return res.status(400).json({message: 'The field name is required'});
  }

  if (body.name === '') {
    return res.status(400).json({message: 'Name cannot be empty'});
  }

  if (typeof body.name !== 'string') {
    return res.status(400).json({message: 'Name should be string'});
  }

  if (body.password === undefined) {
    return res.status(400).json({message: 'The field password is required'});
  }

  if (body.password === '') {
    return res.status(400).json({message: 'password cannot be empty'});
  }

  if (typeof body.password !== 'string') {
    return res.status(400).json({message: 'password should be string'});
  }

  if (isValidEmail(body.email) === false) {
    return res.status(400).json({message: 'The email is invalid'});
  }


  next();
};

module.exports = {
  validateFields
};