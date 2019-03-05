const env = process.env;

module.exports = {
  mysql: {
    host: env.DATABASE_HOST || 'localhost',
    user: env.DATABASE_USER || 'root',
    password: env.DATABASE_PASSWORD || '111111',
    database: env.DATABASE_NAME || 'test',
    port: env.DATABASE_PORT || 3306
  },
  port: 3001
}