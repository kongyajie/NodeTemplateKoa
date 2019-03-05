var todoDao = require('../dao/TodoDao');

//查询数据库所有数据
exports.getAll = async (ctx, next) => {
  let [resultAll] = await todoDao.queryAll();
  ctx.body = resultAll;
}

// 创建任务
exports.createTodo = async (ctx, next) => {
  let [result] = await todoDao.create(ctx.request.body);
  let [resultAll] = await todoDao.queryAll();
  ctx.body = resultAll;
}

//按照id来删除某条数据
exports.deleteTodo = async (ctx, next) => {
  let [result] = await todoDao.delete(ctx.params.id);
  let [resultAll] = await todoDao.queryAll();
  ctx.body = resultAll;
}