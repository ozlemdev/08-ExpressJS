"use strict";
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 */

/* ExpressJS Start */
const express = require("express"); // Assing expressFramework to express variable.
const { request } = require("https");
const app = express(); // run application on express.

/* ENV */
require("dotenv").config();
console.log(process.env);
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;
/*------------------------------------------------------- */

/*------------------------------------------------------- 

/* HTTP_Methods & URLLS */
/*------------------------------------------------------- 
app.get("/", (request, response) => {
  //response.send(" Welcome to Express");
  response.send({ message: 'called in "get" method' });
});
app.post("/", (request, response) =>
  response.send({ message: 'called in "post" method' })
);
app.put("/", (request, response) =>
  response.send({ message: 'called in "put" method' })
);
app.delete("/", (request, response) =>
  response.send({ message: 'called in "delete" method' })
);

//? allow at all methods:
app.all("/", (request, response) =>
  response.send({ message: ' "all" option allows to all method.' })
);

------------------------------------------------------- */
/*------------------------------------------------------- 
//? app.route('url' ) :

app
  .route("/route")
  .get((req, res) => res.send("get"))
  .post((req, res) => res.send("post"))
  .put((req, res) => res.send("put"))
  .delete((req, res) => res.send("delete"));

/*------------------------------------------------------- */
/*URL Options */

/*------------------------------------------------------- */
/*------------------------------------------------------- */

//app.listen(PORT, () => console.log(`Running on http:127.0.0.1:${PORT}`));
app.listen(PORT, () => console.log(`Running on http://${HOST}:${PORT}`));
