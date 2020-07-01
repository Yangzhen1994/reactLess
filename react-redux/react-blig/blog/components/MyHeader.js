/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 */
import '../static/style/components/myHeader.css'
import React from 'react';
import { Row, Col, Menu } from 'antd'
import {
    HomeOutlined,
    VideoCameraAddOutlined,
    SmileOutlined,
} from '@ant-design/icons';

const MyHeader = () => {
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={14}>
                    <span className="header-logo">杨镇</span>
                    <span className="header-text">前端React 开发学习</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={4}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined/>首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <VideoCameraAddOutlined/>视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <SmileOutlined/>生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    );
}

export default MyHeader;
