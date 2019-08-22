import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToggleBtn from './ToggleBtn';
import ToggleAction from './ToggleBgAction';
import './ToggleBtn.css';

class ToggledBg extends Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  toggleBg = () => {
    this.store.dispatch(ToggleAction());
  };

  componentWillMount() {
    this.store = this.context.store;
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() =>
      this.setState(this.store.getState())
    );
  }
  componentWillUnmount() {
    this.unsubscribe;
  }

  render() {
    const { lightsOn } = this.store.getState();
    const bgClass = lightsOn ? ' ToggledBg-lightsOn' : '';
    return (
      <div className={'ToggledBg' + bgClass}>
        <ToggleBtn isActive={lightsOn} onToggle={this.toggleBg} />
      </div>
    );
  }
}

export default ToggledBg;
