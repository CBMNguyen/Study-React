import React, { Component } from 'react';
import logo from './Image/codeXlogo.png';
import './Css/Login.css';
class HeaderLogin extends Component{
    render(){
        return (
            <div className = "titleLogin">
                <div className="text">
                <a href="#">
                    <i className="zmdi zmdi-arrow-left"></i> Go back
                </a>
                   
                </div>
                <div>
                    <img src={logo} className = "logo" alt="logo"/> 
                </div>
                <div  className= "button"><button className = "btn">Sign Up</button></div>
            </div>
        );
    }
}

export default HeaderLogin;