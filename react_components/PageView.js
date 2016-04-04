'use strict';

import React from 'react';

export default class PageView extends React.Component {
  render() {
    let linkClassName = this.props.pageLinkClassName;

    if (this.props.selected) {
      if (typeof(linkClassName) !== 'undefined') {
        linkClassName = linkClassName + ' ' + this.props.activeClassName;
      } else {
        linkClassName = this.props.activeClassName;
      }
    }

    return (
            <a {...this.props} href="" className={linkClassName}>
              {this.props.page}
            </a>
    );
  }
};

