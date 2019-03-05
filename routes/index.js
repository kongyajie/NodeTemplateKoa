const Router = require('koa-router');
const todoRouter = require('./TodoRouter');

var router = new Router({
  prefix: '/api'
});

router.use('/todo', todoRouter.routes());

module.exports = router;