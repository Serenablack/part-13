const mongoose = require("mongoose");
require("dotenv").config();

//eslint-disable-next-line
const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  number: {
    type: String,
    minLength: 8,
    validate: {
      validator: (num) => {
        if (num.split("-")[0].length === 2 || num.split("-")[0].length === 3)
          return true;
        else return false;
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(); //_id lai id le replace garxa
    delete returnedObject._id; //delete _id and __V
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);
