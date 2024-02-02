const express = require("express");
const bodyParser = require("body-parser");
const { sendConfirmationMail } = require("./controller/sendmail");
const { confirmEmail } = require("./controller/confirmmail");
const cors =require('cors')
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send(`Welcome`));

app.post("/sendConfirmationEmail", sendConfirmationMail);

app.get("/confirm", confirmEmail);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
