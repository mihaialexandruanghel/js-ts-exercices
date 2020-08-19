import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

/*

Standard Math Operations

*/

app.get("/sum/:number1/:number2", (request, response) => {
  let number1 = parseInt(request.params.number1);
  let number2 = parseInt(request.params.number2);
  let sum = number1 + number2;
  response.send(`${sum}`);
});

app.get("/substraction/:number1/:number2", (request, response) => {
  let number1 = parseInt(request.params.number1);
  let number2 = parseInt(request.params.number2);
  let substraction = number1 - number2;
  response.send(`${substraction}`);
});

app.get("/multiplication/:number1/:number2", (request, response) => {
  let number1 = parseInt(request.params.number1);
  let number2 = parseInt(request.params.number2);
  let multiplication = number1 * number2;
  response.send(`${multiplication}`);
});

app.get("/division/:number1/:number2", (request, response) => {
  let number1 = parseInt(request.params.number1);
  let number2 = parseInt(request.params.number2);
  let multiplication = number1 / number2;
  response.send(`${multiplication}`);
});

/*

Another Math Operation

*/

app.post("/squareRoot", (request, response) => {
  let number = request.body.number ? request.body.number : "N/A";
  let result = Math.sqrt(number);

  response.json(result);
});

app.post("/pow", (request, response) => {
  let numbers = {
    number1: request.body.number1 ? request.body.number1 : "N/A",
    number2: request.body.number2 ? request.body.number2 : "N/A",
  };
  let result = Math.pow(numbers.number1, numbers.number2);

  response.json(result);
});

app.post("/sin", (request, response) => {
  let number = request.body.number ? request.body.number : "N/A";

  let result = Math.sin(number);

  response.json(result);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
