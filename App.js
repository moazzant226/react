import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

import logo from './logo.svg';
import './App.css';
import About from './components/About/About.jsx';
import Home from './components/home.jsx';

function App() {
  return (
    <>
    <About />
    <Home />
    </>
  );
}


