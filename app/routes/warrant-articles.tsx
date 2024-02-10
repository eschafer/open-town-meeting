import { json } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { fetchGraphQL } from '../utils';

const columns = [
  { id: 'session', label: 'Session' },
  { id: 'number', label: 'Article Number' },
  { id: 'title', label: 'Article Title' },
  // { id: 'description', label: 'Article Description' },
];

function createData(number, title, description, { startDate, sessionName }) {
  const session = `${startDate} ${sessionName}`;
  return { session, number, title, description };
}

export const loader = async ({ request }: { request: Request }) => {
  const query = `
    query AllWarrantArticles {
      allWarrantArticles {
        warrantArticleId
        articleNumber
        articleTitle
        articleDescription
        createdAt
        updatedAt
        townMeetingSession {
          townMeetingSessionId
          startDate
          sessionName
          createdAt
          updatedAt
        }
      }
    }
  `;

  const data = await fetchGraphQL({ query, request });

  const rows = data.allWarrantArticles.map((article) => {
    return createData(
      `${article.townMeetingSession.sessionName} WA-${article.articleNumber}`,
      article.articleTitle,
      article.articleDescription,
      article.townMeetingSession,
    );
  });

  return json(rows);
};

export default function WarrantArticles() {
  const rows = useLoaderData();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Warrant Articles
      </Typography>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[50, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
