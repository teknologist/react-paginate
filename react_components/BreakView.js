'use strict';

import React from 'react';

export default class BreakView extends React.Component {
  render() {
    return (
       <a {...this.props} href="" className={this.props.pageLinkClassName}>
        {this.props.breakLabel}
      </a>
    );
  }
};
