'use strict';
const Service = require('egg').Service;

class UserService extends Service {
    /**
     * 根据用户ID查找用户
     **/
    async queryUser(id) {
        let result = {};
        const res = await this.ctx.model.User.findAll({
            where: { id: id }
        });
        if (res.length == 0) {
            return false;
        }
        return res;
    }

}

module.exports = UserService;
