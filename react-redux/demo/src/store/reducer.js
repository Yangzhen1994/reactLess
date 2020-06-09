/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/9
 */
import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'
const defaultData = {
    inputValue:'write',
    dataList:[]
}
export default (state = defaultData, action) => {
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === GET_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.dataList = action.data.data.list
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.dataList.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.dataList.splice(action.index,1)
        return newState
    }
    return state
}
