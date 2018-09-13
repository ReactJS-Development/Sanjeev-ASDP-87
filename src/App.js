import React, { Component } from 'react';
import Stateless from './Stateless.js';
import Statefull from './Statefull.js';

class App extends Component { 
  render() {
    return (
          <div>
            <Stateless />
            <Statefull />
          </div>
    );
  }
}
export default App;


