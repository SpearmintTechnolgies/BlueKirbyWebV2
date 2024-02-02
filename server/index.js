const express = require("express");
const bodyParser = require("body-parser");
const { sendConfirmationMail } = require("./controller/sendmail");
const { confirmEmail } = require("./controller/confirmmail");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT;

app.get("/", (req, res) => res.send(`Welcome`));

app.post("/sendConfirmationEmail", sendConfirmationMail);

app.get("/confirm", confirmEmail);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
