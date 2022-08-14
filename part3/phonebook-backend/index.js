const express = require("express");
const cors = require("cors");
const { response } = require("express");
const morgan = require("morgan");

const App = express();
App.use(cors());
// App.use(morgan("tiny"));
App.use(
  morgan("tiny", "/api/persons", (req, res) => {
    const body = req.body;
    console.log(body);
    // return res.json(body);
  })
);

App.use(express.json());

let phonebookEntries = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    id: 5,
    name: "nsgh q23423",
    number: "39-23-6423122",
  },
  {
    id: 6,
    name: "cv dfg",
    number: "39-23-6423122",
  },
  {
    id: 7,
    name: "ert kyu",
    number: "39-23-24242",
  },
  {
    id: 8,
    name: "Mary asdf",
    number: "39-23-s345345",
  },
];

App.get("/", (req, res) => {
  res.end("Morgan Logger App");
});

App.get("/api/persons", (request, response) => {
  response.json(phonebookEntries);
});

App.get("/api/persons/:id", (request, response) => {
  const CurrId = Number(request.params.id);
  const thisIdInfo = phonebookEntries.find((info) => info.id === CurrId);
  if (thisIdInfo) response.json(thisIdInfo);
  else
    response.status(404).json({
      error: 404,
      message: `There's no contact details with id ${CurrId}`,
    });
});

App.delete("/api/persons/:id", (request, response) => {
  const delId = Number(request.params.id);
  phonebookEntries = phonebookEntries.filter((people) => people.id !== delId);

  response.status(204).end();
});

App.get("/info", (request, response) => {
  //   console.log(phonebookEntries.length);
  const info = {
    message: `The phonebook has info for ${phonebookEntries.length} people`,
    date: new Date(),
  };
  response.setHeader("content-type", "text/html").send(`<h4>${info.message}</h4>
    <h4>${info.date}</h4>
    `);
});

const generateId = () => {
  let complexId = "";
  for (i = 0; i < 10; ++i) complexId += Math.floor(Math.random() * 10);
  return Number(complexId);
};

App.post("/api/persons/", (request, response) => {
  const body = request.body;
  // console.log(body);
  const ifExits = phonebookEntries.some((item) => item.name === body.name);
  if (!body.name || !body.number)
    return response.status(400).json({
      error: "name or number is missing",
    });
  else if (ifExits)
    return response.status(400).json({
      error: "Name must be unique",
    });

  const contactDetails = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
  phonebookEntries = phonebookEntries.concat(contactDetails);
  response.json(phonebookEntries);
});

App.listen("3002", () => {
  console.log("Phonebook server listening at port 3002");
});
