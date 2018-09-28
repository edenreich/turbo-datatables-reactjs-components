import React, { Component } from "react";
import Axios from "axios";

class Datatable extends Component {

    constructor(props) {
        super(props);

        this.props.gettingRecords();
        Axios.get(this.props.url, { params: this.props.data }).then(response => this.props.recordsFetched(response.data))
    }

    componentWillUpdate(nextProps, state) {
        Object.keys(nextProps.data).forEach((prop) => {
            if (nextProps.data[prop] !== this.props.data[prop]) {
                Axios.get(nextProps.url, { params: nextProps.data }).then(response => this.props.recordsFetched(response.data))
            }
        });
    }

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