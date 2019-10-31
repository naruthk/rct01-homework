import React, { Component } from 'react';
import FilmPoster from "./FilmPoster";

class FilmRow extends Component {

  static getFullYearFromDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.getFullYear();
  }

  render() {
    const { title, posterPath, releaseDate } = this.props;

    return (
      <div className="film-row">
        <FilmPoster url={posterPath} />

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{getFullYearFromDate(releaseDate)}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
