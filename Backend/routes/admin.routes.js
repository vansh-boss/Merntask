const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");
const { reply } = require("../controllers/admin.controller");

router.post("/reply/:commentId", auth, role("admin"), reply);

module.exports = router;
