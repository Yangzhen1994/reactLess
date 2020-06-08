/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/5
 */
const defaultState = {
    inputValue:'write',
    dataList:['xxx','xxx1','xxx2']
}
export default (state=defaultState,action) => {
    // reducer 里面只可以接受state不能改变state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return  newState
    }
    return state
}
