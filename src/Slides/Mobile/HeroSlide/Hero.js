import React, { Component } from 'react';
import NameAndJobTitle from './NameAndJobTitle';
import Quote from './Quote';

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <NameAndJobTitle />
	<Quote />
      </React.Fragment>
    );
  }
}

export default Hero;
