/**
 * @Description:
 * @author: YaphetS丶yz
 * @date: 2020/6/10
 */
import React, {Component} from 'react';
import { Link, Route } from "react-router-dom";
import List from "./List";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {cid:123,title:'技术胖的个人博客-1'},
                {cid:456,title:'技术胖的个人博客-2'},
                {cid:789,title:'技术胖的个人博客-3'},
            ]
        }
       /* this.props.history.push("/home/");*/
    }
    render() {
        return (
            <div>
               {/* <Redirect to={'/home'}/>*/}
                <div className="topNav">
                    <ul>
                        {
                            this.state.list.map((item,index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/list/${item.cid}`}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='videoContent' key={this.props.location.key}>
                    <div><h3>blog</h3></div>
                    <Route path='/list/:id' component={List}/>
                </div>
            </div>
        );
    }
}

export default Index;
