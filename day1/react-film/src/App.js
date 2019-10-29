import React, { Component } from 'react';
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";
import './App.css';

class App extends Component {
  render() {
    const { films } = TMDB;

    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={films} />
          <FilmDetails />
        </div>
      </div>
    );
  }
}

export default App;
