'use strict';
//  说明表结构
//  说明表结构
module.exports = app => {
    const { INTEGER, STRING } = app.Sequelize;
    const Category = app.model.define('category', {
        cid: {
            type: INTEGER,
            primaryKey: true,
            // 可以指定字段映射
            field: 'id'
        },
        name: STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'category',
    });


    return Category;
};
