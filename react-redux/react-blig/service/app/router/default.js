/**
 * @Description:前台匹配路由
 * @author: YaphetS丶yz
 * @date: 2020/7/26
 */
module.exports = app => {
    const { router, controller } = app;
    router.get('/default/index',controller.default.home.index)
    router.get('/default/getArticleList',controller.default.home.getArticleList)
    router.get('/default/getArticleById',controller.default.home.getArticleById)
    router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)
    router.get('/default/getArticleListById',controller.default.home.getArticleListById)
};
