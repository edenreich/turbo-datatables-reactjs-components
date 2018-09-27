import React, { Component } from "react";


class Datatable extends Component {

    render() {
        return (
            <div className="datatable" style={{width:'100%'}}>
                <table className="table table-striped table-bordered" style={{width:'100%'}}>
                    {this.props.children}
                </table>
            </div>
        );
    }
}

export default Datatable;