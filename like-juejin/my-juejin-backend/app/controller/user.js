'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
    async queryUser() {
        const { ctx } = this;
        const query = ctx.query;
        const result = await ctx.service.user.queryUser(query.id);
        ctx.body = {
            code: 200,
            data: {
                user: result
            }
        };
    }
}

module.exports = UserController;
