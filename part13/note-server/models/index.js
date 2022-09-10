const Note = require("./Note");
const User = require("./User");

Note.sync();
User.sync();

User.hasMany(Note);
Note.belongsTo(User);

module.exports = {
  Note,
  User,
};
