const mongoose = require("mongoose");

// we are interacting mongobd from cmd to its checking for password if password wrong exits
if (process.argv.length < 3) {
  console.log(
    "Please Provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

// console.log(process.env.MONGO);

const password = process.argv[2];
const url = `mongodb+srv://SystemAdmin:${password}@cluster0.chgdrmp.mongodb.net/PhonebookSchema?retryWrites=true&w=majority`;

const newName = process.argv[3];
const newNum = process.argv[4];
console.log(newNum, newName);

const PhoneBookSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Person = mongoose.model("Persons", PhoneBookSchema);

mongoose
  .connect(url)
  .then((result) => {
    console.log("Successfully Connected!!");
    const person = new Person({
      name: newName,
      number: newNum,
    });

    if (person.name === undefined || person.number === undefined) {
    } else {
      person.save();

      return Person.find({});
    }
  })
  .then((result) => {
    if (process.argv.length > 3) {
      return console.log(`added ${newName} ${newNum} to phonebook`);
    } else if (process.argv.length === 3) {
      result.forEach((item) => {
        console.log(item);
      });
      mongoose.connection.close();
    }
  })
  .catch((error) => {
    console.log("No Internet Connection. Error: ", error);
  });
