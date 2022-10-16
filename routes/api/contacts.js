const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", authenticate, ctrlWrapper(ctrl.getContactsById));

router.post("/", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.put("/:contactId", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", authenticate, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite));

router.delete("/:contactId", authenticate, ctrlWrapper(ctrl.removeById));

module.exports = router;
