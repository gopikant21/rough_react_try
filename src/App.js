import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
//import './components/Navbar.css';
import Notification from './components/notification.js';
import './components/notification.css';
import About from './components/about.js';
import Events from './components/all_events/events.js';
//import {Grid} from './components/events.js';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Notification/>
        <About/>
        <Events/>
      </div>
        
    );
  }
}

export default App;
