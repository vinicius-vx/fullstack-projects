const clubsModel = require('../../models/clubs/clubsModel');

const getAll = async (_req, res) => {
  const clubs = await clubsModel.getAll();
  return res.status(200).json(clubs);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const club = await clubsModel.getById(id);
  return res.status(200).json(club);
};

const getByUf = async (req, res) => {
  const { uf } = req.params;
  
  const club = await clubsModel.getByUf(uf);
  return res.status(200).json(club);
};

const postClub = async (req, res) => {
  const createdClub = await clubsModel.postClub(req.body);
  return res.status(201).json(createdClub);
};

const putClub = async (req, res) => {
  const { id } = req.params;
  const updatedClub = await clubsModel.putClub(id, req.body);
  return res.status(201).json(updatedClub);
};

const deleteClub = async (req, res) => {
  const { id } = req.params;  
  await clubsModel.deleteClub(id);

  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  getByUf,
  postClub,
  putClub,
  deleteClub
};