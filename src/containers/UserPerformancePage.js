import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function UserPerformancePage({ users }) {
  const sortedUsers = users.sort((a, b) => b.totalProfit - a.totalProfit);

  return (
    <div>
      <h1>Performances des utilisateurs</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Utilisateur</TableCell>
              <TableCell align="right">Nombre de trades</TableCell>
              <TableCell align="right">Montant total misé</TableCell>
              <TableCell align="right">% de réussite</TableCell>
              <TableCell align="right">Bénéfice total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers.map((user, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{user.name}</TableCell>
                <TableCell align="right">{user.numTrades}</TableCell>
                <TableCell align="right">{user.totalAmount}</TableCell>
                <TableCell align="right">{((user.numSuccessfulTrades / user.numTrades) * 100).toFixed(2)}%</TableCell>
                <TableCell align="right">{user.totalProfit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserPerformancePage;
