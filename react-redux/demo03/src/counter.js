/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/12
 */
import React, { createContext , useContext } from 'react';
import {CountContext} from './App';
function Counter(){
    const count = useContext(CountContext)  //一句话就可以得到count
    return (<h2>{count}</h2>)
}

export default Counter;
