import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Component() {
  const [precinctData, setPrecinctData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const query = `
        query AllPrecincts {
          allPrecincts(filter: { censusYear: 2020 }) {
            precinctNumber
            pollingPlace
          }
        }
      `;

        const response = await fetch('/graphql', {
          method: 'post',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
          signal: abortController.signal,
        });
        const data = await response.json();

        setPrecinctData(data?.data?.allPrecincts);
      } catch (error) {
        if (error.name === 'AbortError') {
        } else {
          console.error('Failed to fetch data');
        }
      }
    };

    fetchData();

    // Cleanup function to cancel the fetch request when the
    // component is unmounted
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Precinct Number</TableCell>
            <TableCell>Polling Place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {precinctData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.precinctNumber}
              </TableCell>
              <TableCell>{row.pollingPlace}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

Component.displayName = 'Precincts';
