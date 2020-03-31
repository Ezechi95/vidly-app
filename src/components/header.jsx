import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return <p className="m-2">{this.formatCount()}</p>;
  }

  formatCount() {
    const value = this.props.getMovies.length;
    return value === 0 ? (
      "There are no movies in the database."
    ) : (
      <span>Showing {value} movies in the database.</span>
    );
  }
}

export default Header;
