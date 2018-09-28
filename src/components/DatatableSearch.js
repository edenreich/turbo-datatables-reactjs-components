import React, { Component } from "react";

class DatatableSearch extends Component {

  render() {
    return (
      <td className="datatable-search" width="50%">
        <div className="row form-group">
          <div className="col-12">
            <input className="form-control" type="text" name="search" placeholder="search" />
          </div>
        </div>
      </td>
    );
  }
}

export default DatatableSearch;