import React, { Component } from "react";

class DatatablePagination extends Component {

    render() {
        return (
        <table className="datatable-pagination" style={{width: '100%'}}>
            <tbody>
                <tr>
                    <td className="text-left">
                        <div className="col-sm-12 col-md-5">
                            <div className="dataTables_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                        </div>
                    </td>
                    <td className="text-right">
                        <div className="dataTables_paginate paging_simple_numbers">
                            <ul className="pagination">
                                <li className="paginate_button page-item">
                                    <a className="page-link" href=""
                                                            data-dt-idx="" 
                                                            tabIndex="">Previous</a>
                                </li>

                                <li className="paginate_button page-item">
                                    {/* <span className="page-link">...</span> */}
                                    <a className="page-link" href=""
                                                            data-dt-idx=""
                                                            tabIndex="">Link</a>
                                </li>
                                <li className="paginate_button page-item next">
                                    <a className="page-link" href="" 
                                                            data-dt-idx="" 
                                                            tabIndex="">Next</a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        );
    }
}

export default DatatablePagination;