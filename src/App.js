import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Table from "./components/table";
import { getMovies, deleteMovie } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movieId => {
    console.log("Deleted: ", movieId);
    this.setState(deleteMovie(movieId));
  };

  render() {
    return (
      <main className="container">
        <Header getMovies={this.state.movies} />
        <Table getMovies={this.state.movies} onDelete={this.handleDelete} />
      </main>
    );
  }
}

export default App;
