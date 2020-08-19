/**
 * @Description:后台路径匹配
 * @author: YaphetS丶yz
 * @date: 2020/7/26
 */

module.exports = app => {
    const { router, controller } = app;
    var adminauth = app.middleware.adminauth() //中间件(类似路由守卫)
    router.get('/admin/index',controller.admin.main.index)
    router.post('/admin/checkLogin',controller.admin.main.checkLogin)
    router.post('/admin/addArticle',adminauth,controller.admin.main.addArticle)
    router.post('/admin/updateArticle',adminauth,controller.admin.main.updateArticle)
    router.get('/admin/getTypeInfo',adminauth,controller.admin.main.getTypeInfo)
    router.get('/admin/getArticleList',adminauth,controller.admin.main.getArticleList)
    router.get('/admin/deleteArticle',adminauth,controller.admin.main.deleteArticle)
    router.get('/admin/getArticleById',adminauth,controller.admin.main.getArticleById)
};
