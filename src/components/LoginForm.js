import React, {Component} from 'react';
import './Css/Login.css';
class LoginForm extends Component{
    render(){
        return (
            <form className= "formSignin">
                <h1>Sign in</h1>
                <input className = "inputStyle" type= "text" value="Username" />
                <input className = "inputStyle" type= "password" value="12231313131313141414141414141414" />
                <input className= "inputStyle Btn" value="Signip to  Coders-x"/>
                <div className = "remember">
                <input type="radio"></input> 
                    <span className="text">
                        Keep me signed in
                    </span>
                    <div className="check">
                        <a href="#">Forgot username?</a>
                        <a href="#">Forgot password?</a>
                    </div>
                </div>    
            </form>
        );
    }
}

export default LoginForm;