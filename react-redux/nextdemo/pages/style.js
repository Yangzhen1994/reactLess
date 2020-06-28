/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/28
 */
import React,{useState} from 'react'
const style = () => {
    const [color,setColor] = useState('blue')
    const changeColor = () =>{
        setColor(color==='blue'?'red':'blue')
    }
    return (
        <>
            <div className='style'>
                低洼瞧得起我
            </div>
            <button onClick={changeColor}>改变颜色</button>
            <style jsx>
                {`
                    div{color:${color};}
                `}
            </style>
        </>

    )
}

export default style
