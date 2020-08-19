/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 */
import '../static/style/components/myHeader.css'
import React, {useState,useEffect} from 'react';
import Router from 'next/router'
import Link from 'next/link'
import { Row, Col, Menu,Icon } from 'antd'
import {
    HomeOutlined,
    VideoCameraAddOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import { getTypeInfo } from '../pages/api/index'

const MyHeader = () => {
    const [navArr,setNavArr] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            const result = await getTypeInfo().then(res => {
                return (res.data.data)
            })
            setNavArr(result)
        }
        fetchData()
    },[])

    const handleClick = (e) =>{
        if(e.key == 0){
            Router.push('/')
        }else{
            Router.push(`/list?id=${e.key}`)
        }
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">杨镇</span>
                    <span className="header-text">前端React 开发学习</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <HomeOutlined/>首页
                        </Menu.Item>
                        {navArr.map((item)=>{
                           return (
                                <Menu.Item key={item.Id}>
                                    <HomeOutlined/>{item.typeName}
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}


export default MyHeader;
