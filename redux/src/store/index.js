/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/5
 */
import { createStore , applyMiddleware, compose } from 'redux'
//import createSagaMiddleware from 'redux-saga'   //引入saga
//import mySagas from './sagas'
import reducer from './reducer'
import thunk from 'redux-thunk'

//const sagaMiddleware = createSagaMiddleware();   //创建saga中间件

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore( reducer, enhancer)
//sagaMiddleware.run(mySagas)
export default store
