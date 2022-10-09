const getAllContacts = require("./getAllContacts");
const getContactsById = require("./getContactsById");
const addContact = require("./addContact");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");
const removeById = require("./removeById");

module.exports = {
  getAllContacts,
  getContactsById,
  addContact,
  updateById,
  updateFavorite,
  removeById,
};
