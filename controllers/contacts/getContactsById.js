const contacts = require("../../models/contact");
const { RequestError } = require("../../helpers");

const getContactsById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = getContactsById;
