const { query } = require("./dbConnection");

const resumeUpdate = async (username, url) => {
  try {
    const rows = await query("UPDATE users SET resume = ? WHERE username = ?", [
      url,
      username,
    ]);
    if (rows.length > 0) return { status: true };
    return { status: false };
  } catch (err) {
    return err;
  }
};

module.exports = {
  resumeUpdate,
};
