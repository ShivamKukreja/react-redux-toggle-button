/* import React, { Component } from 'react';
import ToggleBtn from './ToggleBtn';
import './ToggleBtn.css';

class ToggledBg extends Component {
    constructor(props) {
        super(props);
        this.state = {lightsOn: false};
    }
    toggleBg = () => {
        this.setState({ lightsOn : !this.state.lightsOn});
    }
    render() {
        const bgClass = this.state.lightsOn ? ' ToggledBg-lightsOn' : '';
        return(
            <div className={'ToggledBg' + bgClass}>
                <ToggleBtn isActive = {this.state.lightsOn} onToggle = {this.toggleBg} />
            </div>
        )
    }
} */

import React from 'react';
import ToggleBtn from './ToggleBtn';
import './ToggleBtn.css';

function ToggledBg(props) {
    const bgClass = props.lightsOn ? ' ToggledBg-lightsOn' : '';
    return (
        <div className={'ToggledBg' + bgClass}>
            <ToggleBtn isActive={props.lightsOn} onToggle={props.onToggle} />
        </div>
    )
}
export default ToggledBg;