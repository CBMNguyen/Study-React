import React, {Component} from 'react';
import './Css/Login.css';
import classnames from 'classnames'

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component{
    render(){
        const {currentColor} = this.props;
        return (
            <div className= "TrafficLight">
                <div className = {classnames('buld', 'red', {active: currentColor === RED})}></div>
                <div className = {classnames('buld', 'orange', {active: currentColor === ORANGE})}></div>
                <div className = {classnames('buld', 'green', {active: currentColor === GREEN})}></div>
            </div>
        );
    }
    
}

export default TrafficLight;