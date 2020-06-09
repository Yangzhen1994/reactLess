/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/5
 */
import React, {Component} from 'react';
import { changeInputAction , addItemAction , delItemAction, getMyListActionSaga, getTodoList } from './store/actionCreators'
import store from './store'
import TodoListUI from './TodoListUi'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addItem = this.addItem.bind(this)
        this.delItem = this.delItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                dataList={this.state.dataList}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                delItem={this.delItem}
            />
        );
    }
    componentDidMount(){
         const action = getTodoList()
         store.dispatch(action)
        // saga:
        //const action = getMyListActionSaga()
        //store.dispatch(action)
    }
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    addItem(){
        const action = addItemAction()
        store.dispatch(action)
    }
    delItem(index){
        const action = delItemAction(index)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}

export default TodoList;
