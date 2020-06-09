/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/9
 */
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
export const changeInputAction = (value) =>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = () =>({
    type:ADD_ITEM
})
export const delItemAction = (index) =>({
    type:DELETE_ITEM,
    index
})
export const getListAction = (data) =>({
    type:GET_LIST,
    data
})
