/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/5
 */
import React, {Component} from 'react';
import {Input, Button, List} from 'antd'
import store from './store'

class TodoList extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <div>
                <div style={{margin:'10px'}}>
                    {/*不能在无状态组件中使用ref*/}
                    <Input value={this.state.inputValue} placeholder={this.state.inputValue} style={{width:'250px',marginRight:'10px'}} onChange={this.changeInputValue}/>
                    <Button type={'primary'}>添加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List border='true' dataSource={this.state.dataList} renderItem={(item) => <List.Item>{item}</List.Item>}/>
                </div>

            </div>
        );
    }
    changeInputValue(e){
        const action = {
            type:'changeInput',
            value:e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}

export default TodoList;
