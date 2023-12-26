"use strict";
/* ------------------------------------------------
  EXPRESSJS
-------------------------------------------------- */

/*
 * npm init -y
 * npm i espress dotenv
 */

/* ExpressJS Start */

const express = require("express"); // Assing expressFramework to express variable.
const { request } = require("http");
const app = express(); // run application on express.

/* ENV */
// dosya içeriğini çalıştırma

require("dotenv").config();
//console.log(process.env);
const HOST = process.env.HOST || "http://localhost";
const PORT = process.env.PORT || 8000;
/*-------------------------------------------------- */

app.get("/", (request, response) => {});

/*-------------------------------------------------- */
app.listen(PORT, () => console.log("Running on ${HOST}:${PORT} "));
/*-------------------------------------------------- */
