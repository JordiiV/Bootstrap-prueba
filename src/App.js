import React, { Component } from 'react';
import IndexPage from './pages/IndexPage'
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexPage />
      </div>
    );
  }
}

export default App;
