import React, {Component} from 'react';
import './Css/Login.css';
class MenuIcon extends Component{
    render(){
        return (
            <div className="menu">
                <div className="submenu">
                    <i className={this.props.item.icon}></i>
                    <p>{this.props.item.name }</p>
                </div>
            </div>
        );
    }
}

export default MenuIcon;