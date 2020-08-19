/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/27
 */
import React, {useState,useEffect} from 'react';
import marked from 'marked'
import moment from 'moment'
import '../static/css/addArticle.css'
import {Input, Row, Col, DatePicker, Select, Button, message} from "antd";
import axios from 'axios'
import servicePath from "../config";

const {Option} = Select
const { TextArea } = Input;

function AddArticle(props) {
    const [articleId,setArticleId] = useState(0)
    const [articleTitle,setArticleTitle] = useState('')
    const [articleContent,setArticleContent] = useState('')//文章内容编辑区域
    const [markdownContent,setMarkdownContent] = useState('预览内容')//文章内容的预览
    const [introducemd,setIntroducemd] = useState('')//简介的编辑区域
    const [introduceHtml,setIntroduceHtml] = useState('等待编辑')//简介的预览
    const [showDate,setShowDate] = useState()//发布日期
    const [typeInfo,setTypeInfo] = useState([])//所有文章类别
    const [selectType,setSelectType] = useState()//选择对的文章类别的value（类别Id）

    useEffect(()=>{
        getTypeInfo()
        //如果/：id存在，获取articleId 用于编辑
        if(props.match.params.id) {
            setArticleId(props.match.params.id);
            getArticleById(props.match.params.id)
            console.log(props.match.params.id)
        }
    },[])

    marked.setOptions({
        renderer:new marked.Renderer(),
        gfm:true,
        pedantic:false,
        sanitize:false,
        tables:true,
        breaks:false,
        smartLists:true,
    })

    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }
    const changeIntroduce = (e) => {
        setIntroducemd(e.target.value)
        let html = marked(e.target.value)
        setIntroduceHtml(html)
    }
    const getTypeInfo = () => {
        axios({
            method:'GET',
            url:servicePath.getTypeInfo,
            withCredentials:true
        }).then(res =>{
            if(res.data.data === '没有登录'){
                localStorage.removeItem('openId')
                props.history.push('/')
            }else{
                setTypeInfo(res.data.data)
            }
        })
    }
    const selectHanlder = (value) => {
        setSelectType(value)
    }
    const getArticleById = (id) =>{
        axios({
            method:'GET',
            url:servicePath.getArticleById,
            params:{id},
            withCredentials:true
        }).then(res => {
            setArticleTitle(res.data.data[0].title)
            setArticleContent(res.data.data[0].content)
            let html=marked(res.data.data[0].content)
            setMarkdownContent(html)
            setIntroducemd(res.data.data[0].introduce)
            let tmpInt = marked(res.data.data[0].introduce)
            setIntroduceHtml(tmpInt)
            setShowDate(res.data.data[0].addTime)
            setSelectType(res.data.data[0].typeId)
        })
    }
    const submitArticle = () => {
        if(!selectType){
            message.error('请选择文章类别')
            return false
        }else if(!articleTitle){
            message.error('请填写文章名称')
            return false
        }else if(!articleContent){
            message.error('请填写文章内容')
            return false
        }else if(!introducemd){
            message.error('请填写文章简介')
            return false
        }else if(!showDate){
            message.error('请选择发布日期')
            return false
        }
        let dataPoprs = {
            type_id:selectType,
            addTime:new Date(showDate.replace('-','/')).getTime()/1000,
            title:articleTitle,
            article_content:articleContent,
            introduce:introducemd
        }
        if(articleId === 0){
            dataPoprs.view_count = 0
            axios({
                method:'POST',
                url:servicePath.addArticle,
                data:dataPoprs,
                withCredentials: true
            }).then(res => {
                if(res.data.isSuccess){
                    message.success('添加成功')
                    setArticleId(res.data.insertId)
                }else{
                    message.error('添加失败')
                }
            }).catch(err => {
                message.error('出错了')
            })
        }else{
            dataPoprs.Id = articleId
            axios({
                method:'POST',
                url:servicePath.updateArticle,
                data:dataPoprs,
                withCredentials: true
            }).then(res => {
                if(res.data.isSuccess){
                    message.success('修改成功')
                }else{
                    message.error('修改失败')
                }
            }).catch(err => {
                message.error('出错了')
            })
        }

    }

    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input size={'large'} placeholder={'博客标题'} value={articleTitle} onChange={e => {setArticleTitle(e.target.value)}}></Input>
                        </Col>
                        <Col span={4}>
                            <Select defaultValue={selectType} value={selectType} size={"large"} allowClear onChange={selectHanlder} placeholder={'请选择文章类别'}>
                                {
                                    typeInfo.map((item,index) => {
                                        return (
                                            <Option key={index} value={item.Id}>{item.typeName}</Option>
                                        )
                                    })
                                }
                            </Select>
                        </Col>
                    </Row>
                    <br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea className='markdown-content'
                                      rows={35}
                                      value={articleContent}
                                      placeholder={'博客内容'}
                                      onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className={'show-html'} dangerouslySetInnerHTML={{__html:markdownContent}}></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                           {/* <Button size={'large'} style={{marginRight:'20px'}}>暂存文章</Button>*/}
                            <Button size={'large'} type={"primary"} onClick={submitArticle}>发布文章</Button>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <TextArea  value={introducemd} className='markdown-content' rows={5}  placeholder={'简介内容'} onChange={changeIntroduce}/>
                            <br/><br/>
                            <div className={'introduce-html'} dangerouslySetInnerHTML={{__html:introduceHtml}}></div>
                        </Col>
                        <Col span={24}>
                            <div className={'date-select'}>
                                <DatePicker
                                    placeholder={'发布日期'}
                                    size={'large'}
                                    value={showDate && moment(showDate, 'YYYY-MM-DD')}
                                    onChange={(date,dateString) => {setShowDate(dateString)}}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default AddArticle;
