'use strict';
const Service = require('egg').Service;

class JueJinService extends Service {
    /**
     * 获取分类
     **/
    async getCategory() {
        const res = await this.ctx.model.Category.findAll();
        return res;
    }

}

module.exports = JueJinService;
