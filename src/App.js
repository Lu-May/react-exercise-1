import React, { Component } from 'react';
import './App.scss';
import Introduction from './components/Introduction/Intruduction'
import AboutMe from './components/AboutMe/AboutMe.js';
import Education from './components/Education/Education'

class App extends Component {
  render() {
    return (
      <main className="app">
        <Introduction />
        <hr />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;
