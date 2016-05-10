'use strict';

import React from 'react';

export default class BreakView extends React.Component {
  render() {
  	  let linkClassName = this.props.pageLinkClassName;

   
      if (typeof(linkClassName) !== 'undefined') {
        linkClassName = linkClassName + ' ' + 'break';
      } else {
        linkClassName = 'break';
      }
  
    return (
       <a {...this.props} href="" className={linkClassName}>
        {this.props.breakLabel}
      </a>
    );
  }
};

