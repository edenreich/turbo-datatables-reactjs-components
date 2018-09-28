import React, { Component } from "react";

class DatatableBody extends Component {

  render() {
    const records = this.props.records.map((record, index) => {
      return (<tr key={index}>{Object.keys(record).map((column, index) => {
        return (<td key={index}>{record[column]}</td>)
      })}</tr>)
    });

    return (
      <tbody className="datatable-body">
        {this.props.children}{/*Injected DatatableLoader*/}
        {records}
      </tbody>
    );
  }
}

export default DatatableBody;