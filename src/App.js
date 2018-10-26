import React, { Component } from 'react';
import './App.css';
import Tab from './components/tab';
import Control from './components/control';
import List from './components/list';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
          <Tab />
          <div className="col-12 col-sm-8">
              <div className="row">
                  <div className="col-12">
                    <button className="btn btn-primary m-4">Thêm công việc</button>
                  </div>
                  <Control />
                  <div className="col-12">
                  <List />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
