import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement,CategoryScale,LinearScale,Title } from 'chart.js';
ChartJS.register(ArcElement,
   Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend
);
function UserPerformancePage({ users,chartData  }) {
  const sortedUsers = users.sort((a, b) => b.totalProfit - a.totalProfit);
  const barChartData = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Profits',
        data: chartData.profits,
        backgroundColor: '#36a2eb',
        borderColor: '#36a2eb',
        borderWidth: 1,
      },
      {
        label: 'Transactions',
        data: chartData.transactions,
        backgroundColor: '#ffce56',
        borderColor: '#ffce56',
        borderWidth: 1,
      },
    ],
  };
  const pieChartData = {
    labels: chartData.usernames,
    datasets: [
      {
        label: 'Success',
        data: chartData.successRates,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF8A56',
          '#8A2BE2',
          '#00FF7F',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF8A56',
          '#8A2BE2',
          '#00FF7F',
        ],
      },
    ],
  };
  return (
    <div>
      <h1>User performance</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Bar data={barChartData} />
        </div>
        <div style={{ flex: 1 }}>
          <Pie data={pieChartData} />
        </div>
      </div>
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell align="right">Number of trades</TableCell>
              <TableCell align="right">Total amount wagered</TableCell>
              <TableCell align="right">% of success</TableCell>
              <TableCell align="right">Total profit</TableCell>
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
