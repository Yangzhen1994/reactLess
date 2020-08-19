/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/27
 */
import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import Login from './Login'
import AdminIndex from "./adminIndex";
function Main(){
    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/index/"  component={AdminIndex} />
        </Router>
    )
}
export default Main
