const Note = require("./note");
const User = require("./user");

Note.sync();
User.sync();

User.hasMany(Note);
Note.belongsTo(User);

module.exports = {
  Note,
  User,
};
