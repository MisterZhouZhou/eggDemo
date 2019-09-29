'use strict';
//  说明表结构
//  说明表结构
module.exports = app => {
    const { INTEGER, STRING } = app.Sequelize;
    const Pins = app.model.define('pins', {
        id: {
            type: INTEGER,
            primaryKey: true,
            // 可以指定字段映射
            // field: 'id'
        },
        content: STRING,
        company: STRING,
        imgs: STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'pins',
    });


    return Pins;
};
