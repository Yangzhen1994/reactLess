/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/5
 */
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
