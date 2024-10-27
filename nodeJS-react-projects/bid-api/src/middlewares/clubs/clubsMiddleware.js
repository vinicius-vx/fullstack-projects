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

  if (body.uf === undefined) {
    return res.status(400).json({message: 'The field uf is required'});
  }

  if (body.uf === '') {
    return res.status(400).json({message: 'Uf cannot be empty'});
  }

  if (typeof body.uf !== 'string') {
    return res.status(400).json({message: 'Uf should be string'});
  }

  if (body.uf.length < 2 || body.uf.length > 2) {
    return res.status(400).json({message: 'Uf should be 2 letters'});
  }

  next();
};

module.exports = {
  validateFields
};