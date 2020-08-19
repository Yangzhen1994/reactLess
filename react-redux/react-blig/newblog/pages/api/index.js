/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/26
 */
import request from '../../utils/request'
export function getArticleList(query) {
    return request({
        url: '/default/getArticleList',
        method: 'get',
        params: query
    })
}
export function getArticleById(query) {
    return request({
        url: '/default/getArticleById',
        method: 'get',
        params: query
    })
}
export function getTypeInfo(query) {
    return request({
        url: '/default/getTypeInfo',
        method: 'get',
        params: query
    })
}
export function getArticleListById(query) {
    return request({
        url: '/default/getArticleListById',
        method: 'get',
        params: query
    })
}
