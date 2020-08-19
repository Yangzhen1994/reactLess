import React, {useState,useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../components/MyHeader'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { Row, Col, List,Breadcrumb } from 'antd'
import {
    CalendarOutlined,
    FolderOutlined,
    FireOutlined,
} from '@ant-design/icons';
import {getTypeInfo, getArticleListById} from './api/index'
import Home from "./index";
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const listPage = (list) => {
    const renderer = new marked.Renderer()
    marked.setOptions({
        renderer,
        gfm:true,
        pedantic:false,
        sanitize:false,
        tables:true,
        breaks:false,
        smartLists:true,
        highlight:function (code) {
            return hljs.highlightAuto(code).value
        }
    })
    const [myList , setMyList] = useState(list.data)
    useEffect(()=>{setMyList(list.data)})
    return (
        <div className="container">
            <Head>
                <title>Yz的博客</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyHeader></MyHeader>
            <Row className={'comm-main'} type={'flex'} justify={'center'}>
                <Col className={'comm-left'} xs={24} sm={24} md={16} lg={18} xl={14} >
                    <div className="bread-div">
                        <Breadcrumb>
                            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                            <Breadcrumb.Item>{list.typeName}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <List
                        header={<div>最新日志</div>}
                        itemLayout="vertical"
                        dataSource={myList}
                        renderItem={item => (
                            <List.Item>
                                <div className={'list-title'}>
                                    <Link href={{pathname:'/detailed',query:{id:item.id}}}><a>{item.title}</a></Link>
                                </div>
                                <div className={'list-icon'}>
                                    <span><CalendarOutlined />{item.addTime}</span>
                                    <span><FolderOutlined />{item.typeName}</span>
                                    <span><FireOutlined />{item.viewCount}</span>
                                </div>
                                <div className={'list-context'} dangerouslySetInnerHTML={{__html:marked(item.introduce)}}></div>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col className={'comm-right'} xs={0} sm={0} md={7} lg={5} xl={4} >
                    <Author></Author>
                    <Advert></Advert>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    )
}

listPage.getInitialProps = async (context) =>{
    const promise = new Promise((resolve, reject) =>{
        let id = context.query.id
        const fetchData = async () =>{
            const result = await getArticleListById({id}).then(res=>{
                return res.data
            })
            const typeName = await getTypeInfo().then(res=>{
                const currentTypeObj =  res.data.data.filter(item => {
                    return item.Id == id
                })
                return currentTypeObj[0]
            })
            resolve({...result,...typeName})
        }
        fetchData()
    })
    return await promise
}

export default listPage
