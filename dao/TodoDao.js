var sqls = require('../sqlmapping/TodoSqlMapping');

module.exports = {
  async queryAll() {
    return await Pool.query(sqls.queryAll);
  },
  async delete(id) {
    return await Pool.query(sqls.delete, id);
  },
  async create(params) {
    return await Pool.query(sqls.insert, params);
  },
}