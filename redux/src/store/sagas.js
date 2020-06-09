/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/9
 */
import { takeEvery, put } from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreators'
import axios from 'axios'
function* mySaga() {
    //等待捕获action
    yield takeEvery(GET_MY_LIST, getList)
}
function* getList(){
    const res = yield axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
    const action = getListAction(res.data)
    yield put(action)
}

export default mySaga;
