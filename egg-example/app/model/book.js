'use strict';
//  说明表结构
//  说明表结构
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const Book = app.model.define('book', {
    id: {
      type: INTEGER,
      primaryKey: true,
      // 可以指定字段映射
      // field: 'id',
    },
    name: STRING,
    data: STRING,
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'book',
  });


  return Book;
};
