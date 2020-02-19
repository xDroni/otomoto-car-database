import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CarsListComponent from './components/CarsList.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={ CarsListComponent } />
      </div>
    </Router>
  );
}

export default App;
