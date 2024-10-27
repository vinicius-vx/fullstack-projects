const isValidDateFormat = require('../../commons/validationDate');

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

  if (body.nickname === undefined) {
    return res.status(400).json({message: 'The field nickname is required'});
  }

  if (body.nickname === '') {
    return res.status(400).json({message: 'nickname cannot be empty'});
  }

  if (typeof body.nickname !== 'string') {
    return res.status(400).json({message: 'nickname should be string'});
  }

  if (isValidDateFormat(body.birth_date) === false) {
    return res.status(400).json({message: 'The birth_date is not in the format DD/MM/YYYY'});
  }

  if (isValidDateFormat(body.start_date) === false) {
    return res.status(400).json({message: 'The start_date is not in the format DD/MM/YYYY'});
  }

  if (body.contract_type === undefined) {
    return res.status(400).json({message: 'The field contract_type is required'});
  }

  if (body.contract_type === '') {
    return res.status(400).json({message: 'contract_type cannot be empty'});
  }

  if (typeof body.contract_type !== 'string') {
    return res.status(400).json({message: 'contract_type should be string'});
  }

  next();
};

module.exports = {
  validateFields
};