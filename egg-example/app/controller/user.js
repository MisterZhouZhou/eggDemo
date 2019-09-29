'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    await this.ctx.render('user/index.tpl');
  }

  // 查询所有数据
  async findAll() {
    const { ctx } = this;
    const result = await ctx.service.user.findAll();
    ctx.body = result;
  }

  // 新增数据
  async insert() {
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.user.insert(data);
    ctx.status = 200;
    ctx.body = result;
  }

  // 更新数据
  async update() {
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.user.update(data);
    ctx.body = result;
  }

  // 删除记录
  async delete() {
    const { ctx } = this;
    const data = ctx.request.body;
    const result = await ctx.service.user.delete(data);
    ctx.body = result;
  }
}

module.exports = UserController;
