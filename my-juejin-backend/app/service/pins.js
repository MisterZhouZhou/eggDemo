'use strict';
const Service = require('egg').Service;

class PinsService extends Service {
    /**
     * 根据用户ID查找用户pins
     **/
    async queryUserPins(id) {
        let result = {};
        const res = await this.ctx.model.Pin.findAll({
            where: { uid: id }
        });
        if (res.length == 0) {
            return false;
        }
        return res;
    }

}

module.exports = PinsService;
