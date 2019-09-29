'use strict';
const Subscription = require('egg').Subscription;

class LoggerSubscription extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      interval: '5s', // 1 分钟间隔
      type: 'worker', // 指定所有的 worker 都需要执行/all/worker
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    const res = await this.ctx.curl('https://registry.npm.taobao.org/egg/latest', {
      // 自动解析 JSON response
      dataType: 'json',
      // 30 秒超时
      timeout: 30000,
    });
    this.ctx.logger.info('Egg latest version: %s', res.data.version);
  }
}


module.exports = LoggerSubscription;


// 简写版
// module.exports = {
//   schedule: {
//     interval: '5s', // 1 分钟间隔
//     type: 'all', // 指定所有的 worker 都需要执行
//   },
//   async task(ctx) {
//     // const res = await ctx.curl('http://www.api.com/cache', {
//     //   dataType: 'json',
//     // });
//     // ctx.app.cache = res.data;
//     console.log('=======');
//   },
// };
