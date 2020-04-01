import React, { Component } from "react";
import Like from "./common/like";

class Table extends Component {
  state = {};
  render() {
    const { getMovies, onDelete } = this.props;
    const tableContent = getMovies;
    return (
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
        {tableContent.map(e => (
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
    );
  }
}

export default Table;
