/**
 * 在app.use(router)之前调用
 */
var response_formatter = async (ctx, next) => {
  //先去执行路由
  try {
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
  } catch (err){
    // some errors will have .status
    // however this is not a guarantee
    ctx.body = {
        statu: err.status || 500,
        code: 0,
        msg: err.message
    }

    // since we handled this manually we'll
    // want to delegate to the regular app
    // level error handling as well so that
    // centralized still functions correctly.
    ctx.app.emit('error', err, ctx);
  }
}

module.exports = response_formatter;