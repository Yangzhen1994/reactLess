/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/10
 */
/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/10
 */
import React from 'react';
import {Route, Link } from "react-router-dom";
import GetUp from "./workplace/GetUp";
import Money from "./workplace/money";

const Workplace = () =>{
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to='/workplace/money'>加薪攻略</Link></li>
                    <li><Link to='/workplace/getUp'>早起秘籍</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <div><h3>职场软技能</h3></div>
                <Route path='/workplace/money' component={Money}/>
                <Route path='/workplace/getUp' component={GetUp}/>
            </div>
        </div>
    )
}


export default Workplace;
