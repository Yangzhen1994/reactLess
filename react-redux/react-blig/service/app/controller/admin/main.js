/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/28
 */
'use strict'

const Controller = require('egg').Controller;

class MainController extends Controller{
    async index(){
        this.ctx.body = 'hi'
    }
    // 登录接口
    async checkLogin(){
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = `SELECT userName FROM admin_user WHERE userName = '${userName}' AND password = '${password}'`
        const res = await this.app.mysql.query(sql)
        if(res.length > 0){
            let openId = new Date().getTime()
            this.ctx.session.openId = {openId}
            this.ctx.body = {'data':'登录成功','openId':openId}
        }else{
            this.ctx.body = {'data':'登录失败'}
        }
    }
    // 获取所有文章类型
    async getTypeInfo(){
        const resType = await this.app.mysql.select('type')
        this.ctx.body = {'data':resType}
    }
    // 发布文章接口
    async addArticle(){
        let tmpArticleObj = this.ctx.request.body
        const result = await this.app.mysql.insert('article',tmpArticleObj)
        const insetSuccess = result.affectedRows === 1
        const insertId = result.insertId

        this.ctx.body = {
            isSuccess:insetSuccess,
            insertId:result.insertId
        }

    }
    // 更新文章
    async updateArticle(){
        let tmpArticleObj = this.ctx.request.body
        //更新数据会根据主键 id 进行更新，如果你的主键不是ID，那么会一个错误：
        // Can not auto detect update condition, please set options.where, or make sure obj.id exists
        // 这里就需要用到都三个参数 options 指明更新的数据
        let options = {
            where: {
                Id: tmpArticleObj.Id
            }
        };
        const result = await this.app.mysql.update('article',tmpArticleObj,options)
        const updateSuccess = result.affectedRows === 1

        this.ctx.body = {
            isSuccess:updateSuccess,
        }
    }
    // 获取文章列表
    async getArticleList(){
        let sql = 'SELECT article.id as id,'+
            'article.title as title,'+
            'article.introduce as introduce,'+
            'article.article_content as content,'+
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,"+
            'article.view_count as viewCount,'+
            'type.typeName as typeName,'+
            'type.id as typeId '+
            'FROM article LEFT JOIN type ON article.type_id = type.Id '+
            'ORDER BY article.addTime Desc'
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {'data': result}
    }
    // 删除文章
    async deleteArticle(){
        let id = this.ctx.query.id
        const result = await this.app.mysql.delete('article',{Id:id})
        this.ctx.body = {'data': result}
    }
    // 获取文章详情
    async getArticleById(){
        let id = this.ctx.query.id
        let sql = 'SELECT article.id as id,'+
            'article.title as title,'+
            'article.introduce as introduce,'+
            'article.article_content as content,'+
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,"+
            'article.view_count as viewCount,'+
            'type.typeName as typeName,'+
            'type.id as typeId '+
            'FROM article LEFT JOIN type ON article.type_id = type.Id '+
            'WHERE article.id='+id
        let result = await this.app.mysql.query(sql)
        this.ctx.body = {data:result}
    }
}

module.exports = MainController
