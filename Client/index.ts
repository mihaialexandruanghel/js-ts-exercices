import fetch from "node-fetch";

const sumURL = "http://localhost:8080/sum/2/3";
const substractionURL = "http://localhost:8080/substraction/10/5";
const multiplicationURL = "http://localhost:8080/multiplication/10/10";
const divisionURL = "http://localhost:8080/division/578/32";
const sqrtURL = "http://localhost:8080/squareRoot";
const powURL = "http://localhost:8080/pow";
const sinURL = "http://localhost:8080/sin";

fetch(sumURL)
  .then((body) => body.json())
  .then((json) => console.log("Sum: " + json));

fetch(substractionURL)
  .then((body) => body.json())
  .then((json) => console.log("Substraction: " + json));

fetch(multiplicationURL)
  .then((body) => body.json())
  .then((json) => console.log("Multiplication: " + json));

fetch(divisionURL)
  .then((body) => body.json())
  .then((json) => console.log("Division: " + json));

const powParameteres = new URLSearchParams();
powParameteres.set("number1", "2");
powParameteres.set("number2", "3");
fetch(powURL, {
  method: "POST",
  body: powParameteres,
})
  .then((res) => res.json())
  .then((json) => console.log("Pow:" + json));

const sqrtParam = new URLSearchParams();
sqrtParam.set("number", "2");
fetch(sqrtURL, {
  method: "POST",
  body: sqrtParam,
})
  .then((res) => res.json())
  .then((json) => console.log("Square root:" + json));

const sinParam = new URLSearchParams();
sinParam.set("number", "90");
fetch(sinURL, {
  method: "POST",
  body: sinParam,
})
  .then((res) => res.json())
  .then((json) => console.log("Sin:" + json));
