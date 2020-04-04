import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import Header from "./header";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: this.props.getMovies, genres });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { onDelete } = this.props;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Header getMovies={filtered} />
          <MoviesTable movies={filtered} onDelete={onDelete} />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
