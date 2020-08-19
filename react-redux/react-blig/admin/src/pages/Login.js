/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/27
 */
import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Card, Input,Button ,Spin, message } from 'antd';
import {
    UserOutlined,
    LockOutlined
} from '@ant-design/icons';
import '../static/css/Login.css';
import axios from  'axios'
import servicePath from "../config";

function Login(props){
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const checkLogin = ()=>{
        if(!userName){
            message.error('用户名不能为空')
            return false
        }else if(!password){
            message.error('密码不能为空')
            return false
        }
        setIsLoading(true)
        axios({
            method:'POST',
            url:servicePath.checkLogin,
            data: {userName,password},
            withCredentials:true
        }).then(res =>{
            setIsLoading(false)
            if(res.data.data === '登录成功'){
                localStorage.setItem('openId',res.data.openId)
                props.history.push('/index')
            }else{
                message.error('用户名密码错误')
            }
        }).catch(err=>{
            message.error('请求出错了')
            setIsLoading(false)
        })
    }
    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="后台管理系统" bordered={true} style={{ width: 400 }}>
                    <Input id="userName"
                           size="large"
                           placeholder="请输入用户名"
                           autoComplete="off"
                           prefix={<UserOutlined style={{color:'rgba(0,0,0,.25)'}}/>}
                           onChange={(e) => {setUserName(e.target.value)}}
                    />
                    <br/><br/>
                    <Input id="userName"
                           size="large"
                           type="password"
                           placeholder="请输入用户名密码"
                           autoComplete="off"
                           prefix={<LockOutlined style={{color:'rgba(0,0,0,.25)'}}/>}
                           onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Button type={"primary"} size={"large"} block onClick={checkLogin}>登录</Button>
                </Card>
            </Spin>,
        </div>
    )
}

export default Login;
