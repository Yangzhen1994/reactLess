/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/28
 */
let baseUrl = window.location.protocol + '//' + window.location.host + '/admin/'   //服务
//let baseUrl = 'http://127.0.0.1:7001/admin/' //本地

let servicePath = {
    checkLogin:`${baseUrl}checkLogin`,
    getTypeInfo:`${baseUrl}getTypeInfo`, //获得文章类别信息
    addArticle:`${baseUrl}addArticle`, //添加文章
    updateArticle:`${baseUrl}updateArticle`, //修改文章
    getArticleList:`${baseUrl}getArticleList`, //获取文章列表
    deleteArticle:`${baseUrl}deleteArticle`, //删除文章
    getArticleById:`${baseUrl}getArticleById`, //获取文章详情
}

export default  servicePath
