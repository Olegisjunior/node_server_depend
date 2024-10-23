const Contacts = require("../models/contact");
const createPath = require("../helpers/create-path");

const getContacts = (req, res) => {
  const title = "Contact";
  Contacts.find()
    .then((contacts) => {
      res.render(createPath("contacts"), { contacts, title });
    })
    .catch((err) => {
      console.log(err);
      res.render(createPath("error"), { title });
    });
};

module.exports = {
  getContacts,
};
