'use strict';
const Controller = require('egg').Controller;

class PinsController extends Controller {
    async queryUserPins() {
        const { ctx } = this;
        const query = ctx.query;
        const result = await ctx.service.pins.queryUserPins(query.id);
        ctx.body = {
            code: 200,
            data: {
                pins: result
            }
        };
    }
}

module.exports = PinsController;
