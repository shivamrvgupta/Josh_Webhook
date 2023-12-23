require("dotenv").config();
const express = require("express");
const morgan = require("morgan")

const apiRoutes = require("./api")

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

const PORT = process.env.PORT || 5123;

app.use(express.json());

app.use("/whatsapp", apiRoutes);


app.listen(PORT, () => {
    console.log(`Console Connected To : ${process.env.PORT}`)
});