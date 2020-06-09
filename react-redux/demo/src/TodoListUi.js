/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/9
 */
import React from 'react';
import {Button, Input, List} from "antd";
import {
    CloseCircleOutlined,
} from '@ant-design/icons';

const TodoListUi = (props) => {
    let { inputValue,changeInputValue,addItem,dataList,delItem } = props
    return (
        <div>
            <div style={{margin:'10px'}}>
                {/*不能在无状态组件中使用ref*/}
                <Input value={inputValue} placeholder={inputValue} style={{width:'250px',marginRight:'10px'}} onChange={changeInputValue}/>
                <Button type={'primary'} onClick={addItem}>添加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List border='true'
                      dataSource={dataList}
                      renderItem={(item,index)=>(<List.Item style={{cursor:'pointer'}} onClick={()=>{delItem(index)}}>{item}<CloseCircleOutlined style={{float:'right'}}/></List.Item>)}
                />
            </div>

        </div>
    );
}
export default TodoListUi
