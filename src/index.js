require("dotenv").config();
const express = require("express");
const apiRoute = require("./routes/routes");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {console.log("el puerto es: " + PORT)});