const contacts = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

module.exports = getAllContacts;
