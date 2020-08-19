/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 */
import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MyHeader from '../components/MyHeader'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { Row, Col, List, Breadcrumb, Affix } from 'antd'
import {
    CalendarOutlined,
    FolderOutlined,
    FireOutlined,
} from '@ant-design/icons';
import '../static/style/pages/detailed.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import {getArticleById} from './api/index'

const Detailed = (props) => {
    const tocify = new Tocify()
    const renderer = new marked.Renderer()
    renderer.heading = function(text, level, raw){
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" hren="#${anchor}" class="anchor-fix"><h${level}>h${text}</h${level}></a>\n`
    }
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
    let html = marked(props.content)
    return (
        <div className="container">
            <Head>
                <title>React Yz Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MyHeader></MyHeader>
            <Row className={'comm-main'} type={'flex'} justify={'center'}>
                <Col className={'comm-left'} xs={24} sm={24} md={16} lg={18} xl={14} >
                    <div>
                        <div className="bread-div">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                                <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div className="detailed-title">
                            {props.title}
                        </div>
                        <div className={'list-icon center'}>
                            <span><CalendarOutlined />{props.addTime}</span>
                            <span><FolderOutlined />{props.typeName}</span>
                            <span><FireOutlined />{props.viewCount}</span>
                        </div>
                        <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}}></div>
                    </div>

                </Col>
                <Col className={'comm-right'} xs={0} sm={0} md={7} lg={5} xl={4} >
                    <Author></Author>
                    <Advert></Advert>
                    <Affix offsetTop={5}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            {tocify && tocify.render()}
                        </div>
                    </Affix>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    )
}

Detailed.getInitialProps = async(context)=>{
    let id = context.query.id
    const promise = new Promise((resolve,reject)=>{
        getArticleById({id}).then(res => {
            resolve(res.data.data[0])
        })
    })
    return await promise
}

export default Detailed
