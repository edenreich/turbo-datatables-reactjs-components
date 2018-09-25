import React, { Component } from "react";

class DatatableWrapper extends Component {

    render() {
        return (
        <div className="datatable-wrapper">
            DatatableWrapper
            { this.props.children }
        </div>
        );
    }
}

export default DatatableWrapper;