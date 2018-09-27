import React, { Component } from "react";

class DatatableSearch extends Component {

  render() {
    return (
      <td className="datatable-search text-right" width="50%">
        <input className="form-control" type="text" name="search" placeholder="search" />
      </td>
    );
  }
}

export default DatatableSearch;