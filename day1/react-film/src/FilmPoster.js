import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    const posterUrl = `https://image.tmdb.org/t/p/w780${this.props.url}`;
  
    return <img src={posterUrl} alt="" />;
  }
}

export default FilmPoster;
