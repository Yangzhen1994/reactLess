/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/9
 */
import React, {Component} from 'react';
import TodoListUi from './TodoListUi';
import {changeInputAction,delItemAction,addItemAction,getListAction} from './store/actionCreators'
import {connect} from 'react-redux';
import store from './store'
import axios from 'axios'
class TodoList extends Component {
    constructor(props){
        super(props)
        //this.state = store.getState()
       // this.storeChange = this.storeChange().bind(this)
    }
    render() {
        return (
            <TodoListUi
                inputValue={this.props.inputValue}
                dataList={this.props.dataList}
                changeInputValue={this.props.changeInputValue}
                addItem={this.props.addItem}
                delItem={this.props.delItem}
            />
        );
    }
    componentDidMount(){
        this.props.getTodoList()
    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        dataList : state.dataList
    }
}
const dispatchToProps = (dispatch)=>{
    return {
        changeInputValue(e){
            let action = changeInputAction(e.target.value)
            dispatch(action)
        },
        addItem(){
            let action = addItemAction()
            dispatch(action)
        },
        delItem(index){
            let action = delItemAction(index)
            dispatch(action)
        },
        getTodoList(){
            axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
                const data = res.data
                const action = getListAction(data)
                dispatch(action)
            })
        }
    }
}
//第一个参数state转成props 第二个参数：数据改变时dispatch转换派发
export default connect(stateToProps,dispatchToProps)(TodoList);
