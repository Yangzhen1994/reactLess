/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/10
 */
import React, {Component} from 'react';


class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:''
        }
    }
    render() {
        return (
                <h2>List-Page{this.state.id}</h2>
        );
    }
    componentDidMount() {
        this.setState({
            id:this.props.match.params.id
        })
    }
}

export default List;
