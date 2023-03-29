import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function TransactionHistoryPage({ transactions }) {
  return (
    <div>
      <h1>Transaction history</h1>  
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Buy Price</TableCell>
              <TableCell align="right">Sell Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">{transaction.date}</TableCell>
                <TableCell align="right">{transaction.buyPrice}</TableCell>
                <TableCell align="right">{transaction.sellPrice}</TableCell>
                <TableCell align="right">{transaction.quantity}</TableCell>
                <TableCell align="right">{transaction.profit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TransactionHistoryPage;
