const Router = require("koa-router");
const router = new Router();
const controller = require("../controllers/changeCoin");

router.post("/", controller.mainChange);

module.exports = router;
