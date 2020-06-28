import Link from 'next/Link'
import Router from 'next/router'
const Home = () =>{
    // nextjs router 钩子
    /*
    * routeChangeStart
    * routeChangeComplete
    * beforeHistoryChange
    * routeChangeError
    * hashChangeStart
    * hashChangeComplete
    * */
    Router.events.on('routeChangeStart',(...args)=>{
        console.log('1、routeChangeStart 路由开始变化参数为：',...args)
    })
    Router.events.on('routeChangeComplete',(...args)=>{
        console.log('2、routeChangeComplete 路由变化结束参数为：',...args)
    })
    Router.events.on('beforeHistoryChange',(...args)=>{
        console.log('3、beforeHistoryChange 路由变化前参数为：',...args)
    })
    Router.events.on('routeChangeError',(...args)=>{
        console.log('3、routeChangeError 路由错误参数为：',...args)
    })
    Router.events.on('hashChangeStart',(...args)=>{
        console.log('5、hashChangeStart 路由开始变化参数为：',...args)
    })
    Router.events.on('hashChangeComplete',(...args)=>{
        console.log('6、hashChangeComplete 路由变化结束参数为：',...args)
    })
    return (
        <>
            <div>首页</div>
            <div> <Link href='/jspang?name=张三'><a>zhangsan去A</a></Link></div>
            <div> <Link href={{pathname:'/jspang',query:{name:'里斯'}}}><a>lisi去A</a></Link></div>
            <div><button onClick={() => {Router.push({pathname:'/jspang',query:{name:'xx'}})}}>去A</button></div>
            <div>
                <Link href='#jspang'><a>hashjsPang</a></Link>
            </div>
        </>
    )
}
export  default  Home
