'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api high';
  }
  async getArticleList() {
    let sql = 'SELECT article.id as id,'+
        'article.title as title,'+
        'article.introduce as introduce,'+
        "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,"+
        'article.view_count as viewCount,'+
        'type.typeName as typeName '+
        'FROM article LEFT JOIN type ON article.type_id = type.Id'
    let results = await this.app.mysql.query(sql)
    this.ctx.body = {data:results}
  }
  async getArticleById() {
    let id = this.ctx.request.query.id
    console.log(id)
    let sql = 'SELECT article.id as id,'+
        'article.title as title,'+
        'article.introduce as introduce,'+
        'article.articl_content as content,'+
        "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,"+
        'article.view_count as viewCount,'+
        'type.typeName as typeName,'+
        'type.id as typeId '+
        'FROM article LEFT JOIN type ON article.type_id = type.Id '+
        'WHERE article.id='+id
    let result = await this.app.mysql.query(sql)
    this.ctx.body = {data:result}
  }
  // 得到类别名称和编号
  async getTypeInfo() {
    let result = await this.app.mysql.select('type')
    this.ctx.body = {data:result}
  }
  // 根据类别Id获得文章列表
  async getArticleListById() {
    let id = this.ctx.request.query.id
    let sql = 'SELECT article.id as id,'+
        'article.title as title,'+
        'article.introduce as introduce,'+
        "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,"+
        'article.view_count as viewCount,'+
        'type.typeName as typeName '+
        'FROM article LEFT JOIN type ON article.type_id = type.Id '+
        'WHERE type_id=' + id
    let results = await this.app.mysql.query(sql)
    this.ctx.body = {data:results}
  }
}

module.exports = HomeController;
