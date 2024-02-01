import React, { useState, useEffect } from 'react';

import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme

const Precincts = () => {
  const [rowData, setRowData] = useState(null);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState([
    { field: 'precinctNumber' },
    { field: 'pollingPlace' },
  ]);

  useEffect(() => {
    const query = `
      query AllPrecincts {
        allPrecincts(filter: { censusYear: 2020 }) {
          precinctNumber
          pollingPlace
        }
      }
    `;

    fetch('/graphql', {
      method: 'post',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setRowData(data?.data?.allPrecincts));
  }, []);

  // ...

  return (
    // Container with theme & dimensions
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      {/* The AG Grid component */}
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};

export default Precincts;
