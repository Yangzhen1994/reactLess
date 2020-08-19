/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/27
 */
import React, {useState} from 'react';
import '../static/css/index.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Route} from "react-router-dom";
import AddArticle from './addArticle'
import ArticleList from "./articleList";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props){

    const [collapsed,setCollapsed] = useState(false)
    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    }
    const path = props.location.pathname
    console.log(path)
    let defaultKey = 'AddArticle'
    if(path === '/index/add'){
        defaultKey = 'AddArticle'
    }else if(path === '/index/list'){
        defaultKey = 'ArticleList'
    }else if(path.indexOf('/index/add/')>-1 ){
        defaultKey = '1'
    }
    const handleClickArticle =(e) =>{
        if(e.key == 'AddArticle' || e.key=== '1'){
            props.history.push('/index/add')
        }else if(e.key == 'ArticleList'){
            props.history.push('/index/list')
        }
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={[defaultKey]} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />} onClick={handleClickArticle}>
                       工作台
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="文章管理" onClick={handleClickArticle}>
                        <Menu.Item key="AddArticle">添加文章</Menu.Item>
                        <Menu.Item key="ArticleList">文章列表</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />} onClick={handleClickArticle}>
                        留言管理
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
                        <Breadcrumb.Item>工作台</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                       <div>
                           <Route path="/index/" exact component={AddArticle}></Route>
                           <Route path="/index/add/" exact component={AddArticle}></Route>
                           <Route path="/index/add/:id" exact component={AddArticle}></Route>
                           <Route path="/index/list/"  component={ArticleList}></Route>
                       </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>powered by Antd</Footer>
            </Layout>
        </Layout>
    )
}



export default AdminIndex;
