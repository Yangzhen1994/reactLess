/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/7/1
 */
/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 */
import '../static/style/components/author.css'
import React from 'react';
import { Avatar, Divider } from 'antd';
import {
    GithubOutlined,
    QqOutlined,
    WechatOutlined,
} from '@ant-design/icons';


const Author = () => {
    return (
        <div className="author-div comm-box">
           <div>
               <Avatar
                   size='100'
                   src={'../static/images/avatar.jpg'}
                />
           </div>
            <div className="author-introduction">
                大家好，我是学习React的菜鸟
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                <Avatar size={28} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />
            </div>
        </div>
    );
}

export default Author;
