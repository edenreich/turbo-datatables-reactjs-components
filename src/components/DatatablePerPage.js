import React, { Component } from "react";

class DatatablePerPage extends Component {

  render() {
    return (
      <td className="datatable-perpage text-left" width="50%">
        <select name="perpage" id="perPage">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </td>
    );
  }
}

export default DatatablePerPage;