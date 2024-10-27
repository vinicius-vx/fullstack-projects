const playersModel = require('../../models/players/playersModel');
const clubsModel = require('../../models/clubs/clubsModel');

const getAll = async (_req, res) => {
  const players = await playersModel.getAll();
  return res.status(200).json(players);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const player = await playersModel.getById(id);
  return res.status(200).json(player);
};

const getByContractId = async (req, res) => {
  const { id } = req.params;
  const player = await playersModel.getByContractId(id);
  return res.status(200).json(player);
};

const getPlayersByClub = async (req, res) => {
  const { id } = req.params;
  const playersByClub = await playersModel.getPlayersByClub(id);
  const club = await clubsModel.getById(id);
  const message = {
    Club: club,
    Players: playersByClub
  };
  return res.status(200).json(message);
};

const postPlayer = async (req, res) => {
  const createPlayer = await playersModel.postPlayer(req.body);
  return res.status(201).json(createPlayer);
};

const putPlayer = async (req, res) => {
  const { id } = req.params;
  const updatePlayer = await playersModel.putPlayer(id, req.body);
  return res.status(201).json(updatePlayer);
};

const deletePlayer = async (req, res) => {
  const { id } = req.params;
  await playersModel.deletePlayer(id);
  return res.status(204).json();
};

module.exports = {
  getAll,
  getById,
  getByContractId,
  getPlayersByClub,
  postPlayer,
  putPlayer,
  deletePlayer
};