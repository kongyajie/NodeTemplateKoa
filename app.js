const app = require('./init/koa');
global.Pool = require('./init/database');

module.exports = app;
