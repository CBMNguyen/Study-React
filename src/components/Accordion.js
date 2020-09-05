import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

Accordion.propTypes={
    heading: PropTypes.string,
    children: PropTypes.string,
    isCollapsed: PropTypes.bool,
    onAccordionClick: PropTypes.func
};

export default Accordion;