require("dotenv").config();
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const changeCoin = require("./router/changeCoin");
const app = new Koa();
app.use(cors());
app.use(bodyParser());

app.use(changeCoin.routes());

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running port ${process.env.SERVER_PORT}`);
});
