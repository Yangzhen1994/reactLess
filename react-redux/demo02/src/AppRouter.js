/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/9
 */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./pages/index";
import Vedio from "./pages/vedio";
import Workplace from "./pages/Workplace";
import "./style/index.css";

let routeConfig =[
    {path:'/',title:'博客首页',exact:true,component:Index},
    {path:'/video/',title:'视频教程',exact:false,component:Vedio},
    {path:'/workplace/',title:'职场技能',exact:false,component:Workplace}
]
const AppRouter = () =>{
    return (
        <Router>
            <div className='mainDiv'>
                <div className="leftNav">
                    <h3>以及导航</h3>
                    <ul>
                        {
                            routeConfig.map((item,index)=>{
                                return (<li key={index}> <Link to={item.path}>{item.title}</Link> </li>)
                            })
                        }
                    </ul>
                </div>
                <div className="rightMain">
                    {
                        routeConfig.map((item,index)=>{
                            return (<Route key={index} exact={item.exact} path={item.path}  component={item.component} />)
                        })
                    }
                   {/* <Route path='/'  component={Index}/>
                    <Route path='/video/' component={Vedio}/>
                    <Route path='/workplace/' component={Workplace}/>*/}
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;
