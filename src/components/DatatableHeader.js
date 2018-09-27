import React, { Component } from "react";

class DatatableHeader extends Component {

  render() {
    return (
      <div className="datatable-header">
        <table style={{width: '100%'}}>
          <tbody>
            <tr>
              {this.props.children}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DatatableHeader;