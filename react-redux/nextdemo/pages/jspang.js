/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 */
import Link from 'next/Link'
import axios from 'axios'
import {withRouter} from "next/router"; //赋予接收参数的能力

const jspang = ({router,list}) => {
    return (
        <>
            <div>{router.query.name}</div>
            <ul>
                {
                    list.map(item => {
                        return <li>{item}</li>
                    })
                }
            </ul>
            <Link href='/'><a>首页</a></Link>
        </>
    )
}
jspang.getInitialProps = async () => {
    const promise  =  new Promise((resolve,reject)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(res => {
            console.log(res)
            resolve(res.data.data)
        }).catch(err => {
            reject(err)
        })
    })
    promise.then(function () {
        console.log("Promise Resolved");
    }).catch(function () {
        console.log("Promise Rejected");
    });
    return await promise
}

export default withRouter(jspang) ////赋予接收参数的能力
