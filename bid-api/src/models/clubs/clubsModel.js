const connection = require('../connection');

const getAll = async () => {
  const query = 'SELECT * FROM clubs';
  const [clubs] = await connection.execute(query);
  return clubs;
};

const getById = async (id) => {
  const query = 'SELECT * FROM clubs WHERE id = ?';
  const [club] = await connection.execute(query, [id]);
  return club;
};

const getByUf = async (uf) => {
  const query = 'SELECT * FROM clubs WHERE uf = ?';
  const [clubs] = await connection.execute(query, [uf]);
  return clubs;
};

const postClub = async (club) => {
  const query = 'INSERT INTO clubs(name, uf, created_at) VALUES (?, ?, ?)';
  const dateUTC = new Date(Date.now()).toISOString();
  const [postClub] = await connection.execute(query, [club.name, club.uf, dateUTC]);
  const message = {
    insertId: postClub.insertId,
    message: `${club.name} registered successfully`
  };

  return message;
};

const putClub = async (id, club) => {
  const query = 'UPDATE clubs SET name = ?, uf = ?, updated_at = ? WHERE id = ?';
  const dateUTC = new Date(Date.now()).toISOString();
  await connection.execute(query, [club.name, club.uf, dateUTC, id]);
  const message = {
    updatedId: id,
    message: `${club.name} updated successfully`
  };
  
  return message;
};


const deleteClub = async (id) => {
  const query = 'DELETE FROM clubs WHERE id = ?';
  const club = await connection.execute(query, [id]);
  return club;
};

module.exports = {
  getAll,
  getById,
  getByUf,
  postClub,
  putClub,
  deleteClub
};