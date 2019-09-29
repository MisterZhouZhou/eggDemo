'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/category', controller.juejin.getCategory);
  router.get('/queryUser', controller.user.queryUser);
};
