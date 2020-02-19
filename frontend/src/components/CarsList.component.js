import React, { Component } from 'react';
import Search from './Search.component';
import Car from './Car.component';
import Database from './Database.component';
import Pagination from './Pagination.component';
import axios from 'axios';

export default class CarsListComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
      cars: [],
      loading: true,
      carName: '',
      currentPage: 1,
      limit: 5,
      next: null,
      previous: null
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/cars?page=${this.state.currentPage}&limit=${this.state.limit}`)
      .then(res => {
        this.setState({
          cars: res.data.results,
          next: res.data.next,
          previous: res.data.previous,
          loading: false
        });
        console.log(this.state);
      })
      .catch(err => {
        console.error(err);
      })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevState.currentPage !== this.state.currentPage || prevState.carName !== this.state.carName) {
      axios.get(`http://localhost:4000/cars/${this.state.carName}?page=${this.state.currentPage}&limit=${this.state.limit}`)
        .then(res => {
          this.setState({
            cars: res.data.results,
            next: res.data.next,
            previous: res.data.previous,
            loading: false
          });
        })
        .catch(err => {
          console.error(err);
        })
    }
  }

  changeState = (newState) => {
    this.setState({
      ...this.state,
      ...newState
    });
  };

  render() {
    if(this.state.loading) return 'Loading';
    else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Search changeState={this.changeState}/>
            </div>
            <div className="col-2 offset-8">
              <Database size={this.state.cars.length} />
            </div>
            { this.carsList() }
          </div>
        </div>
      )
    }
  }

  carsList() {
    const currentCarsMap = this.state.cars.map((car, i) => {
      return <Car car={car} key={i} />
    });

    return (
      <div>
        {currentCarsMap}
        <Pagination next={this.state.next} previous={this.state.previous} changeState={this.changeState} />
      </div>
    )
  }
}