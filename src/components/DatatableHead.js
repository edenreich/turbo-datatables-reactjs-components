import React, { Component } from "react";

class DatatableHead extends Component {

  render() {
    const columns = this.props.columns.map((column, index) => {
      return (
        <th key={index}>{column.name}</th>
      )
    });
    
    return (
      <thead className="datatable-head">
        <tr>
          {columns}
        </tr>
      </thead>
    );
  }
}

export default DatatableHead;