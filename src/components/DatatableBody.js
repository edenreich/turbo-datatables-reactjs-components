import React, { Component } from "react";

class DatatableBody extends Component {

  render() {
    return (
      <tbody className="datatable-body">
        {this.props.children}
        <tr>
          <td>DatatableBody</td>
        </tr>
      </tbody>
    );
  }
}

export default DatatableBody;