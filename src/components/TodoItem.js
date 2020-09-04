import React, {Component} from 'react';
import './Css/Login.css'
import classnames from 'classnames';
class TodoItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {item, onclick} = this.props;

        return (
            <div className = {classnames('singWrapper',{'singStyle': item.isListened})}>
                <i onClick = {onclick} className={classnames("zmdi zmdi-check-circle",{'icons': item.isListened})}></i>
                <p>{this.props.item.sing}</p>
            </div>
        );
    }
}
export default TodoItem;