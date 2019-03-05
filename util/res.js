/**
 * 在app.use(router)之前调用
 */
var response_formatter = async (ctx, next) => {
  //先去执行路由
  await next();

  //如果有返回数据，将返回数据添加到data中
  if (ctx.body) {
      ctx.body = {
          code: 1,
          body: ctx.body,
          meta: {}
      }
  } else {
      ctx.body = {
          code: 0,
          msg: 'fail'
      }
  }
}

module.exports = response_formatter;