'use strict';

const Controller = require('egg').Controller;

class JuejinController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
    }

    // 获取分类
    async getCategory() {
        const { ctx } = this;
        const result = await ctx.service.juejin.getCategory();
        ctx.body = {
            code: 200,
            data: {
                list: result
            }
        };
    }
}

module.exports = JuejinController;
