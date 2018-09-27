import React, { Component } from "react";

class DatatableFooter extends Component {

  render() {
    let { columns } = this.props;
    columns = columns.map((column, index) => {
      return (
        <td key={index}>{column.name}</td>
      )
    });

    return (
      <tfoot className="datatable-footer">
        <tr>
          {columns}
        </tr>
      </tfoot>
    );
  }
}

export default DatatableFooter;