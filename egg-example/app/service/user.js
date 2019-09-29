'use strict';

const Service = require('egg').Service;

class User extends Service {
  async findAll() {
    // 注意model的名称为大写
    let res = await this.ctx.model.User.findAll({
      attributes: [ 'id', 'name', 'data' ],
    });
    if (res.length === 0) {
      res = false;
    }
    return res;
  }

  // 插入数据
  async insert(data) {
    let res = [];
    let result = {};
    const { ctx } = this;
    // 查重
    const { isExit } = await this.checkIsExit(data);
    if (!isExit) {
      res = await ctx.model.User.create(data);
      if (res.length === 0) {
        result.result = false;
      } else {
        result = {
          result: true,
          id: res.id,
        };
      }
    } else {
      result = {
        msg: '项目重名，请确认后插入',
        code: 10000,
        result: false,
      };
    }
    return result;
  }

  // 更新数据
  async update(data) {
    let res = [];
    let result = {};
    const { ctx } = this;
    // 查重
    const { isExit } = await this.checkIsExit(data);
    if (!isExit) {
      result = {
        msg: '项目不存在，请确认后更新',
        code: 10000,
        result: false,
      };
    } else {
      res = await ctx.model.User.update(
        data,
        {
          where: { id: data.id },
        }
      );
      if (res.length === 0) {
        result.result = false;
      } else {
        result = {
          result: true,
          id: data.id,
        };
      }
    }
    return result;
  }

  // 删除记录
  async delete(data) {
    let result = {};
    const { ctx } = this;
    const res = await ctx.model.User.destroy({
      where: { id: data.id },
    });
    if (res.length === 0) {
      result = { result: false };
    } else {
      result = { result: true };
    }
    return result;
  }

  // 检查项目是否存在
  async checkIsExit(data) {
    let sqlWhere = { name: data.name };
    if (data.id) {
      sqlWhere = { id: data.id };
    }
    // 查重
    const hasData = await this.ctx.model.User.findAll({
      attributes: [ 'id', 'name', 'data' ],
      where: sqlWhere,
    });
    if (hasData.length === 0) {
      return { isExit: false, data: null };
    }
    return { isExit: true, data: hasData };
  }
}

module.exports = User;
