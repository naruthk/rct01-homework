import React, { Component } from 'react';
import FilmRow from "./FilmRow";

class FilmListing extends Component {
  render() {
    const { films } = this.props;
    const filmRows = films.map( (film, index) => {
      const { id, title, overview, poster_path, release_date } = film;
      return (
        <FilmRow
          key={id}
          title={title}
          overview={overview}
          posterPath={poster_path}
          releaseDate={release_date}
        />
      )
    });

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {filmRows}
      </div>
    );
  }
}

export default FilmListing;
