const { query } = require("./dbConnection");
const login = async (username, password) => {
  try {
    const rows = await query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    return rows;
  } catch (err) {
    return err;
  }
};

module.exports = {
  login,
};
