const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url)
  .then((result) => {
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
    validate: {
      validator: (num) => {
        num = num.split("-");

        if (
          num.length === 2 &&
          typeof Number(num[0]) === "number" &&
          typeof Number(num[1]) === "number" &&
          (num[0].length === 2 || num[0].length === 3)
        ) {
          return true;
        } else if (num.length === 1) return true;
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
