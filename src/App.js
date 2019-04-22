import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './NavBar'
import {Articles} from './Articles'

class App extends Component {
  render() {
    return (
      <div className="page">
        <NavBar />
        <Articles />
      </div>
    )
  }
}

export default App;
