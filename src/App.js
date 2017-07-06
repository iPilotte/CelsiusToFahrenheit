import React, { Component } from 'react';
import './asset/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="card">
              <h3>Hello</h3>
              <form className="form-horizontal">
                <label>Celsius
                  <input type="text" className="form-control"/>
                </label>
                <label>Fahrenheit
                  <input type="text" className="form-control"/>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
