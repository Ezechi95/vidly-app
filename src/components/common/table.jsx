import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

// Gets selected props from the props in params below, can be done like this or the other way
const Table = ({ columns, onSort, sortColumn, data }) => {
  // const { columns, onSort, sortColumn, data } = props; this is the other way
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
