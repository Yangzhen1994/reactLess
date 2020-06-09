/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/9
 */
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = ()=>({
    type:ADD_ITEM
})
export const delItemAction = (value)=>({
    type:DELETE_ITEM,
    value
})
export const getListAction  = (data)=>({
    type:GET_LIST,
    data
})
export const getMyListActionSaga  = (data)=>({
    type:GET_MY_LIST,
    data
})
//以前的action是对象，现在的action可以是函数了，这就是redux-thunk带来的好处
export const getTodoList  = ()=>{
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        })
    }
}
