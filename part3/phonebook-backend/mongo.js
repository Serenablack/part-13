const mongoose = require("mongoose");

// we are interacting mongobd from cmd to its checking for password if password wrong exits
if (process.argv.length < 3) {
  console.log(
    "Please Provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

// console.log(process.env.MONGO);

const url = process.env.MONGODB_URI;

const newName = process.argv[3];
const newNum = process.argv[4];

const PhoneBookSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Person = mongoose.model("Persons", PhoneBookSchema);

mongoose
  .connect(url)
  .then((result) => {
    console.log("Successfully Connected!!");
  })
  .catch((error) => {
    console.log("Cannot connect to Internet..");
  });

if (process.argv.length == 3) {
  Person.find({})
    .then((result) => {
      console.log("Phonebook:");
      result.forEach((item) => {
        console.log(item.name + " " + item.number);
        mongoose.connection.close();
      });
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  const person = new Person({
    name: newName,
    number: newNum,
  });
  person
    .save()
    .then(console.log(`added ${newName} ${newNum} to phonebook`))
    .catch((error) => {
      console.log("Cannot added to DB..");
      mongoose.connection.close();
    });
}
