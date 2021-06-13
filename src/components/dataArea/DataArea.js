import React, { Component } from "react";
import Table from "../table/Table";
import API from "../../utils/API";

export default class DataArea extends Component {
    state = {
        employees: [{}]
    };

    componentDidMount() {
        API.getRandomEmployees()
            .then(res => this.setState({ employees: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Table
                    employees={this.state.employees}
                />
            </div >
        );
    }
}
