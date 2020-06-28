/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 */
import React, {useState} from 'react';
import dynamic from "next/dynamic"; //异步加载自定义组件

const Style = dynamic(import('../components/jspang'))

const Time = () =>{
    const [nowTime,setTime] = useState(Date.now())
    const changeTime = async () =>{
        const moment = await import('moment') //外部库懒加载
        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>显示时间为:{nowTime}</div>
            <Style>我是异步加载来的</Style>
            <button onClick={changeTime}>改变时间格式</button>

        </>

    )
}

export default Time;
