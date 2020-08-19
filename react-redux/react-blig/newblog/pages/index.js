import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../components/MyHeader'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import { Row, Col, List } from 'antd'
import {
    CalendarOutlined,
    FolderOutlined,
    FireOutlined,
} from '@ant-design/icons';
import '../static/style/pages/index.css'
import { getArticleList } from './api/index'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const Home = (list) => {
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
    return (
        <div className="container">
            <Head>
                <title>React Yz Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyHeader></MyHeader>
            <Row className={'comm-main'} type={'flex'} justify={'center'}>
                <Col className={'comm-left'} xs={24} sm={24} md={16} lg={18} xl={14} >
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
Home.getInitialProps = async () =>{
    const promise = new Promise((resolve, reject) =>{
        getArticleList().then(res=>{
            console.log(res.data)
            resolve(res.data)
        })
    })
    return await promise
}
export default Home
