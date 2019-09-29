'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(new Date() + '====' + new Date().valueOf() + '====' + ctx.helper.countTime(12) + '====' + ctx.helper.timestampToTime(new Date().valueOf()) + '====' + ctx.helper.relativeTime(new Date().valueOf()));
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
