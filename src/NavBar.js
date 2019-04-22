import React, { Component } from 'react';
import './bootstrap.min.css';
import './Navbar.css'


export class NavBar extends Component {
  render() {

  return (
    <div id="mainBar">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="index.html">HighOnCoding</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="categories.html">Categories</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
  }
}
