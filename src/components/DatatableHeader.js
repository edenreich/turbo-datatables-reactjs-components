import React, { Component } from "react";

class DatatableHeader extends Component {

  render() {
    return (
      <div className="datatable-header">
        DatatableHeader
        { this.props.children }
      </div>
    );
  }
}

export default DatatableHeader;