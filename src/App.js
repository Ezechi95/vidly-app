import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies, deleteMovie } from "./services/fakeMovieService";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import MovieForm from "./components/movieForm";

class App extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movieId) => {
    console.log("Deleted: ", movieId);
    this.setState(deleteMovie(movieId));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container m-2">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => (
                <Movies
                  getMovies={this.state.movies}
                  onDelete={this.handleDelete}
                  {...props}
                />
              )}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
