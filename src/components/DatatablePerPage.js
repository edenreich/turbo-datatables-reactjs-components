import React, { Component } from "react";

class DatatablePerPage extends Component {

  render() {
    const perPageOptions = this.props.perPage.map((perPage, index) => {
      return (
        <option value={perPage} key={index}>{perPage}</option>
      );
    });

    return (
      <td className="datatable-perpage text-left" width="50%">
        <select name="perpage" id="perPage">
          {perPageOptions}
        </select>
      </td>
    );
  }
}

export default DatatablePerPage;