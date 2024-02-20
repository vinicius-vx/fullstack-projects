const connection = require('../connection');

const getAll = async () => {
  const query = 'SELECT * FROM users';

  const [users] = await connection.execute(query);
  return users;
};

const getById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';

  const [user] = await connection.execute(query, [id]);
  return user;
};

const getByClubId = async (id) => {
  const query = 'SELECT * FROM users WHERE club_id = ?';

  const [user] = await connection.execute(query, [id]);
  return user;
};

const getByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = ?';

  const [user] = await connection.execute(query, [email]);
  return user;
};

const postUser = async (user) => {
  const query = `INSERT INTO users(
    name, email, password, club_id)
    VALUES (?, ?, ?, ?)`;

  const [postUser] = await connection.execute(query, 
    [
      user.name, user.email, user.password, user.club_id
    ]);
    
  const message = {
    insertId: postUser.insertId,
    message: `${user.name} registered successfully`,
    clubId: user.club_id,
  };

  return message;
};

const putUser = async (id, user) => {
  const query = `UPDATE users SET 
  name = ?, email = ?, password = ?, club_id = ? WHERE id = ?`;

  await connection.execute(query, 
    [
      user.name, user.email, user.password, user.club_id, id
    ]);
    
  const message = {
    message: `${user.name} updated successfully`,
    clubId: user.club_id,
  };

  return message;
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM users WHERE id = ?';
  const user = await connection.execute(query, [id]);
  return user;
};

module.exports = {
  getAll,
  getById,
  getByClubId,
  postUser,
  putUser,
  deleteUser,
  getByEmail
};