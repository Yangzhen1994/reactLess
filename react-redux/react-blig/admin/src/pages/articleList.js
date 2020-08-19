/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/28
 */
import React, {useState, useEffect} from 'react';
import {List, Button, Row, Col, Modal, message} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios'
import servicePath from "../config";
import '../static/css/articleList.css'
const { confirm } = Modal

function ArticleList(props) {
    const [list, setList] = useState([])
    useEffect(()=>{
        getList()
    },[])
    const getList = () =>{
        axios({
            method:'GET',
            url:servicePath.getArticleList,
            withCredentials: true
        }).then(res => {
            setList(res.data.data)
        })
    }
    // 删除文章
    const deleteArticle = (id) => {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: '确认删除么',
            onOk() {
                axios({
                    method:'GET',
                    url:servicePath.deleteArticle,
                    params:{id},
                    withCredentials: true
                }).then(res => {
                    message.success('文章删除成功')
                    getList()
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    return (
        <div style={{background:'#fff'}}>
            <List
                header={
                    <Row className={'list-div'}>
                        <Col span={8}><b>标题</b></Col>
                        <Col span={4}><b>类别</b></Col>
                        <Col span={4}><b>发布时间</b></Col>
                        <Col span={4}><b>浏览量</b></Col>
                        <Col span={4}><b>操作</b></Col>
                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Row className={'list-div'}>
                            <Col span={8}>{item.title}</Col>
                            <Col span={4}>{item.typeName}</Col>
                            <Col span={4}>{item.addTime}</Col>
                            <Col span={4}>{item.viewCount}</Col>
                            <Col span={4}>
                                <Button type={"primary"} style={{marginRight:'10px'}} onClick={() => {props.history.push(`/index/add/${item.id}`)}}>修改</Button>
                                <Button type={"warning"} onClick={() => {deleteArticle(item.id)}}>删除</Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    )
}
export default ArticleList;
