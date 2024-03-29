import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { fetchGraphQL } from "../utils";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const loader = async ({ request }: { request: Request }) => {
  const query = `
    query AllPrecincts {
      allPrecincts(filter: { censusYear: 2020 }) {
        precinctNumber
        pollingPlace
      }
    }
  `;
  const data = await fetchGraphQL({ query, request });
  return json(data.allPrecincts);
}

export default function Precincts() {
  const precinctData:Array<{ precinctNumber: string; pollingPlace: string }> = useLoaderData();

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
              key={row.precinctNumber}
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
