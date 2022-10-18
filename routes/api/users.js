const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");

const { ctrlWrapper } = require("../../helpers");

const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post("/signup", validateBody(schemas.signupSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/subscription", authenticate, validateBody(schemas.signupSchema), ctrlWrapper(ctrl.updateSubscription));

module.exports = router;
