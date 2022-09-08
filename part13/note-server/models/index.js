const Note = require("./note");
const User = require("./user");

Note.sync();
User.sync();

User.hasMany(Note);
Note.belongsTo(User);
Note.sync({ alter: true });
User.sync({ alter: true });

module.exports = {
  Note,
  User,
};
