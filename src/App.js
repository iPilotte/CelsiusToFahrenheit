import React, { Component } from 'react';
import './asset/css/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      C: 0,
      F: 0,
    };
  }

  changeCeltoFah(i){
    console.log(this.refs.Celsius.value)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="card">
              <h3>Hello</h3>
              <hr/>
              <form className="form-horizontal">
                <div className="form-group">
                  <label>Celsius
                    <input type="text" ref="Celsius" className="form-control" onChange={() => this.changeCeltoFah()}/>
                  </label>
                </div>
                <div className="form-group">
                  <label>Fahrenheit
                    <input type="text" className="form-control"/>
                  </label>
                </div>
              </form>
              <hr/>
              <h4>Thanks</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
