import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import MyChart from '../components/Chart/MyChart';
import { Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TradingPage = () => {
  const [priceData, setPriceData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Price',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });
  const [transactionData, setTransactionData] = useState([
    { id: 1, type: 'buy', amount: 0.1, price: 50000, date: '2022-04-01' },
    { id: 2, type: 'sell', amount: 0.05, price: 45000, date: '2022-04-02' },
    { id: 3, type: 'buy', amount: 0.2, price: 48000, date: '2022-04-03' },
    { id: 4, type: 'sell', amount: 0.15, price: 52000, date: '2022-04-04' },
  ]);

  const [quantity, setQuantity] = useState('');

  const handleBuy = () => {
    // Logic to handle buying cryptocurrency
    console.log(`Buying ${quantity} cryptocurrency`);
  };

  const handleSell = () => {
    // Logic to handle selling cryptocurrency
    console.log(`Selling ${quantity} cryptocurrency`);
  };

  return (
    <div>
      <div>
        <MyChart {...priceData} />
      </div>

      <TextField
        id="quantity"
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleBuy}>
        Buy
      </Button>
      <Button variant="contained" color="secondary" onClick={handleSell}>
        Sell
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>{transaction.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TradingPage;


