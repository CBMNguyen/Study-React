import React, {Component, Children} from 'react';
class Accordion extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {heading, children, isCollapsed, onAccordionClick} = this.props;
        return (
            <div className = "Accordion">
                <h2 className="heading" onClick={onAccordionClick}>{heading}</h2>
                {isCollapsed && <div className="children">{children}</div>} 
            </div>
        );
    }
}

export default Accordion;