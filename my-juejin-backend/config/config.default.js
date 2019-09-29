/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1569574134706_351';

  // add your middleware config here
  config.middleware = [];

  // 设置跨域问题
  config.cors = {
    origin: '*',
    // credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // mysql 配置
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    dialectOptions: {
      charset: 'utf8mb4',
    },
    database: 'egg',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'zw123456',
    timezone: '+08:00',
  };
  // mysql配置结束
  // security
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:7001' ],
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
