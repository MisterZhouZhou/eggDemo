'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);

  router.get('/user', controller.user.index);
  router.get('/user/findAll', controller.user.findAll);
  router.post('/user/insert', controller.user.insert);
  router.post('/user/update', controller.user.update);
  router.delete('/user/delete', controller.user.delete);
  // router.post('/user/findAll', controller.user.add);
  // router.delete('/api/v1/project/deleteProject', controller.project.delete);
};
