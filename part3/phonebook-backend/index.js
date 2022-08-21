const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const Person = require("./models/person");

const App = express();

App.use(express.static("build"));
App.use(cors());
// App.use(morgan("tiny"));
App.use(
  //eslint-disable-next-line
  morgan("tiny", "/api/persons", (req, res) => {
    const body = req.body;
    console.log(body);
    // return res.json(body);
  })
);

App.use(express.json());

App.get("/", (req, res) => {
  res.end("Morgan Logger App");
});

App.get("/api/persons", (request, response) => {
  Person.find().then((result) => {
    response.json(result);
  });
});

App.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id)
    .then((people) => {
      if (people) {
        response.json(people);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);

      response.status(400).send({ error: "malforamatted id" });
    });
});

App.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;
  const people = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(request.params.id, people, { new: true })
    .then((updatedPeople) => {
      response.json(updatedPeople);
    })
    .catch((error) => {
      next(error);
    });
});

App.delete("/api/persons/:id", (request, response, next) => {
  console.log(request.params.id);
  Person.findByIdAndRemove(request.params.id)
    //eslint-disable-next-line
    .then((result) => {
      response.status(201).end();
    })
    .catch((error) => next(error));
});

App.get("/info", (request, response) => {
  Person.find({}).then((result) => {
    const info = {
      message: `The phonebook has info for ${result.length} people`,
      date: new Date(),
    };
    response.setHeader("content-type", "text/html")
      .send(`<h4>${info.message}</h4>
    <h4>${info.date}</h4>
    `);
  });
});

App.post("/api/persons/", (request, response, next) => {
  const body = request.body;
  const people = new Person({
    name: body.name,
    number: body.number,
  });
  people
    .save()
    .then((savedPeople) => {
      response.json(savedPeople);
    })
    .catch((error) => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};
App.use(errorHandler);
//eslint-disable-next-line
const PORT = process.env.PORT || "3002";
App.listen(PORT, () => {
  console.log(`Phonebook server listening at port ${PORT}`);
});
