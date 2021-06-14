import React, { Component } from 'react';
import Table from '../table/Table';
import API from '../../utils/API';

export default class DataArea extends Component {
  state = {
    employees: [{}],
  };

  componentDidMount() {
    API.getRandomEmployees().then((results) => {
      this.setState({
        employees: results.data.results,
      });
    });
  }

  render() {
    return (
      <div>
        <Table employees={this.state.employees} />
      </div>
    );
  }
}
