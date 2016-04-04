'use strict';

import React from 'react';

export default class BreakView extends React.Component {
  render() {
    let label = this.props.breakLabel;
    let linkClassName = this.props.pageLinkClassName;
    return (
       <a className={linkClassName}>
        {label}
      </a>
    );
  }
};
