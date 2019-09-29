'use strict';

/** @type Egg.EggPlugin */
// 配置跨域
exports.cors = {
    enable: true,
    package: 'egg-cors',
};

// orm框架
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};
