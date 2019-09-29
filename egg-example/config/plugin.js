'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

// 配置跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// 模板引擎
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// 挂载自定义插件
const path = require('path');
exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua'),
};

// orm框架
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
