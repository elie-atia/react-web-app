import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import MyChart from '../components/Chart/MyChart';
import { Button, TextField } from '@mui/material';

const TradingPage  = () => {
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
      </div>
     );
};

export default TradingPage ;


