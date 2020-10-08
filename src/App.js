import React, { Component } from 'react';
import './App.scss';
import AboutMe from './components/AboutMe/AboutMe';

class App extends Component {
  render() {
    return (
      <main className="app">
        <hr />
        <AboutMe />
      </main>
    );
  }
}

export default App;
