const Koa = require('koa');
const cors = require('koa2-cors');
var bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(cors()); // 处理跨域
app.use(bodyParser()); // 解析body

// 返回格式统一处理
const response_formatter = require('../util/res');
app.use(response_formatter);

const config = require('../conf');
const router = require('../routes/index');
app.use(router.routes(), router.allowedMethods());

var port = config.port;
app.listen(port);

module.exports = app;