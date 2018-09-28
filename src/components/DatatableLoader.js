import React, { Component } from "react";
import '../styles/DatatableLoader.css';

class DatatableLoader extends Component {

  render() {

    return this.props.loading ? (
      <tr className="datatable-loader">
        <td colSpan="100%" height="100px" style={{padding: '0', margin: '0'}}>
          <div className="overlay"></div>
          <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
          </div>
        </td>
      </tr>
    ) : (null);
  }
}

export default DatatableLoader;