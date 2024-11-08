export default () => ({
  MONGO_URI: `mongodb://${process.env['MONGO_USERNAME']}:${process.env['MONGO_PASSWORD']}@${process.env['MONGO_HOST']}:${process.env['MONGO_PORT']}/${process.env['MONGO_DB_NAME']}`,
  GLOBAL_PREFIX: 'api',
  DEFAULT_VERSION: '1',
  PREFIX_VERSION: 'v',
});
