import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Table extends Component {
  state = { movies: this.props.getMovies, pageSize: 4, currentPage: 1 };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { onDelete } = this.props;
    // const tableContent = getMovies;

    const { pageSize, currentPage, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {movies.map(e => (
            <tbody key={e._id}>
              <tr>
                <td>{e.title}</td>
                <td>{e.genre.name}</td>
                <td>{e.numberInStock}</td>
                <td>{e.dailyRentalRate}</td>
                <td>
                  <Like toggleVal={e.liked} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(e._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <Pagination
          itemsCount={allMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Table;
