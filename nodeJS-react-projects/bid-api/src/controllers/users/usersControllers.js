const usersModel = require('../../models/users/usersModel');
const clubsModel = require('../../models/clubs/clubsModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAll = async (_req, res) => {
  const users = await usersModel.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await usersModel.getById(id);
  return res.status(200).json(user);
};

const postLogin = async (req, res) => {
  const user = await usersModel.getByEmail(req.body.email);
  const message = {
    message: 'Invalid login, please try again'
  };

  if(user.length == 0) {
    return res.status(400).json(message);
  }

  if(await bcrypt.compare(req.body.password, user[0].password)) {
    const token = jwt.sign({name: user[0].name, email: user[0].email}, 'ahjldfglaskujdghçadikfjhgç', {
      expiresIn: 10 * 60
    });
    const message = {
      message: `Login successfully: Welcome ${user[0].name}`,
      token: token
    };
  
    res.status(200).json(message);
  } else {
    res.status(500).json(message);
  }
};

const getByClubId = async (req, res) => {
  const { id } = req.params;
  const user = await usersModel.getByClubId(id);
  const club = await clubsModel.getById(id);
  const message = {
    Club: club,
    Users: user
  };
  return res.status(200).json(message);
};

const postUser = async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const createUser = await usersModel.postUser(req.body);
  return res.status(201).json(createUser);
};

const putUser = async (req, res) => {
  const { id } = req.params;
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const updateUser = await usersModel.putUser(id, req.body);
  return res.status(201).json(updateUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await usersModel.deleteUser(id);
  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  getByClubId,
  postUser,
  putUser,
  deleteUser,
  postLogin
};