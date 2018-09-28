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
        <div className="row form-group">
          <div className="col-12 col-md-3">
            <select className="form-control" name="perpage" id="perPage" onChange={event => this.props.perPageChanged(event.target.value)}>
              {perPageOptions}
            </select>
          </div>
        </div>
      </td>
    );
  }
}

export default DatatablePerPage;