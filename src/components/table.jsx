import React, { Component } from "react";

class Table extends Component {
  state = {};
  render() {
    const { getMovies, onDelete } = this.props;
    const tableContent = getMovies;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {tableContent.map(e => (
          <tbody key={e._id}>
            <tr>
              <td className="col">{e.title}</td>
              <td className="col">{e.genre.name}</td>
              <td className="col">{e.numberInStock}</td>
              <td className="col">{e.dailyRentalRate}</td>
              <td className="col">
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
    );
  }
}

export default Table;
