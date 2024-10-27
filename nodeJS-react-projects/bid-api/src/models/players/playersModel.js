const connection = require('../connection');
const getRandomInt = require('../../commons/randomInt');

const getAll = async () => {
  const query = 'SELECT * FROM players';

  const [players] = await connection.execute(query);
  return players;
};

const getById = async (id) => {
  const query = 'SELECT * FROM players WHERE id = ?';

  const [player] = await connection.execute(query, [id]);
  return player;
};

const getByContractId = async (id) => {
  const query = 'SELECT * FROM players WHERE contract_id = ?';

  const [player] = await connection.execute(query, [id]);
  return player;
};

const getPlayersByClub = async (id) => {
  const query = `SELECT players.id, players.name, players.nickname, players.birth_date, 
  players.contract_type, players.contract_id, players.start_date, players.publication_date, clubs.name 
  AS club_name FROM players JOIN clubs ON players.club_id = clubs.id WHERE clubs.id = ?`;

  const [players] = await connection.execute(query, [id]);
  return players;
};

const postPlayer = async (player) => {
  const query = `INSERT INTO players(
    name, nickname, birth_date, contract_type, contract_id, start_date, publication_date, club_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  const dateUTC = new Date(Date.now()).toISOString();
  const contractId = getRandomInt(10000, 99999);
  const [postPlayer] = await connection.execute(query, 
    [
      player.name, player.nickname, player.birth_date, player.contract_type, 
      contractId, player.start_date, dateUTC, player.club_id
    ]);
    
  const message = {
    insertId: postPlayer.insertId,
    message: `${player.name} registered successfully`,
    clubId: player.club_id,
    contractId: contractId
  };

  return message;
};

const putPlayer = async (id, player) => {
  const query = `UPDATE players SET 
  name = ?, nickname = ?, birth_date = ?, contract_type = ?, contract_id = ?, start_date = ?, 
  publication_date = ?, club_id = ? WHERE id = ?`;

  const dateUTC = new Date(Date.now()).toISOString();
  await connection.execute(query, 
    [
      player.name, player.nickname, player.birth_date, player.contract_type, 
      player.contract_id, player.start_date, dateUTC, player.club_id, id
    ]);
    
  const message = {
    message: `${player.name} updated successfully`,
    clubId: player.club_id,
    contractId: player.contract_id
  };

  return message;
};

const deletePlayer = async (id) => {
  const query = 'DELETE FROM players WHERE id = ?';
  const player = await connection.execute(query, [id]);
  return player;
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