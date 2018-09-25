import React, { Component } from "react";

class Datatable extends Component {

    render() {
        return (
        <div className="datatable">
            Datatable
            { this.props.children }
        </div>
        );
    }
}

export default Datatable;