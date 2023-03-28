import React from 'react';
import TransactionHistoryPage from '../components/TransactionHistoryPage';

const TransactionHistoryRoute = () => {
  // Replace this with your own data array
  const transactions = [
    { 
      id: 1,
      date: '2022-04-01',
      buyPrice: 50000,
      sellPrice: 0,
      quantity: 0.1,
      profit: 0
    },
    { 
      id: 2,
      date: '2022-04-02',
      buyPrice: 0,
      sellPrice: 45000,
      quantity: 0.05,
      profit: 0
    },
    { 
      id: 3,
      date: '2022-04-03',
      buyPrice: 48000,
      sellPrice: 0,
      quantity: 0.2,
      profit: 0
    },
    { 
      id: 4,
      date: '2022-04-04',
      buyPrice: 0,
      sellPrice: 52000,
      quantity: 0.15,
      profit: 0
    }
  ];
  

  return (
    <TransactionHistoryPage transactions={transactions} />
  );
};

export default TransactionHistoryRoute;
