/* import React,   { Component } from 'react';

class ToggleBtn extends Component {
    constructor(props) {
        super(props);
        this.state = { isActive : false};
    }
    toggle = () => {
        this.setState({ isActive : !this.state.isActive});
        this.props.toggleFn();
    }
    render() {
        //const state = this.state,
          const props = this.props,
            activeClass = props.isActive ? ' is-active' : '',
            activeText = props.isActive ? 'On' : 'Off';
        return (
            <button className = {'SlideBtn' + activeClass} onClick = {this.toggle} >
                <span className = "SlideBtn-label visuallyhidden">{activeText}</span>
                <span className = "SlideBtn-knob"></span>
            </button>
        );
    }
} */

/** 
 * Below is the ‘Stateless Functional Component.’ in the React paralance
 * Above is the stateful version which is modified and the state is lifted above to the parent component
 * Lifting state makes sense because it avoids duplicating state.
 */

import React from 'react';

function ToggleBtn(props) {
    const activeClass = props.isActive ? ' is-active' : '',
          activeText = props.isActive ? 'On' : 'Off';
    return (
        <button className={'SlideBtn' + activeClass} onClick={props.onToggle} >
            <span className="SlideBtn-label visuallyhidden">{activeText}</span>
            <span className="SlideBtn-knob"></span>
        </button>
    );
}
export default ToggleBtn ;