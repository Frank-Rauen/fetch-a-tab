import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Navbar from '../src/components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home'
import Artist from './pages/Artist/Artist'
import Song from './pages/Song/Song'


function App() {
  return (
    <div className="App-outer-container">
      <Navbar />
      <div className='App-inner-container'>
      <Switch>
      <Route exact path='/' render={props =>
        <Home />
      } />
      <Route exact path='/artist' render={props =>
        <Artist />
      } />
      <Route exact path='/song' render={props =>
        <Song />
      } />
      </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
