const axios = require("axios");

module.exports = {
  confirmEmail: async (req, res) => {
    const { email } = req.query;
    try {
      await axios.post(
        `https://api.sendinblue.com/v3/contacts`,
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.API_KEY,
          },
        }
      );
    } catch (error) {
      res.json(error.message);
    }

    try {
      await axios.post(
        `https://api.sendinblue.com/v3/contacts/lists/${process.env.LIST_ID}/contacts/add`,
        {
          emails: [email],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": process.env.API_KEY,
          },
        }
      );
    } catch (error) {
      res.json(error.message);
    }
    res.json("Successfully saved contact");
  },
};
