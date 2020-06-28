/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/10
 */
import React from 'react';
import {Route, Link } from "react-router-dom";
import Video1 from "./video/vedio1";
import Video2 from "./video/vedio2";
import Video3 from "./video/vedio3";

const Vedio = () =>{
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to='/video/video1'>Vedio1</Link></li>
                    <li><Link to='/video/video2'>Vedio2</Link></li>
                    <li><Link to='/video/video3'>Vedio3</Link></li>
                </ul>
            </div>
            <div className='videoContent'>
                <div><h3>视频教程</h3></div>
                <Route path='/video/video1' component={Video1}/>
                <Route path='/video/video2' component={Video2}/>
                <Route path='/video/video3' component={Video3}/>
            </div>
        </div>
    )
}


export default Vedio;
