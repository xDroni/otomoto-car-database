import React, { Component } from 'react';
import Search from './Search.component';

export default class CarsListComponent extends Component {
  render() {
    return (
      <div>
        <Search/>
        <p>List here</p>
      </div>
    )
  }
}