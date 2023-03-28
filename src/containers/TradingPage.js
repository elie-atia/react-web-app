import React, {useState} from 'react';
import { Line } from 'react-chartjs-2';
import MyChart from '../components/Chart/MyChart';

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
  return (
    <div>
    <MyChart {...priceData} /> 
    </div>
     );
};

export default TradingPage ;


