/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 */
import MyHeader from '../components/Head'
import '../static/test.css'
import { Button } from "antd";

const Header = () => {
    return (
        <>
            <MyHeader/>
            <div>woshiHeader</div>
            <Button>我是antd的Button</Button>
        </>
    )
}

export default Header
