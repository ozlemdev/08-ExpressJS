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
const app = express(); // run application on express.

/* ENV */
require("dotenv").config();
console.log(process.env);
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;
/*------------------------------------------------------- */
/* HTTP_Methods & URLLS */

app.get("/", (request, response) => {
  response.send(" Welcome to Express");
});

/*------------------------------------------------------- */
//app.listen(PORT, () => console.log(`Running on http:127.0.0.1:${PORT}`));
app.listen(PORT, () => console.log(`Running on http://${HOST}:${PORT}`));
