import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Features from '../components/Features';
import {Link} from 'react-router-dom';

const Home = () => {
  const features = [
    {
      image: 'static/images/feature.jpg',
      title: 'Simulation of buying and selling cryptocurrencies',
      description: 'In this platform, you can buy and sell most of the cryptocurrencies available on the market, in real time. All this is made possible thanks to a connection via the Binance API as well as the management of your data from our database and our server.',
    },
    {
      image: 'static/images/feature.jpg',
      title: 'View your transaction history as well as your benefits',
      description: 'You can also see your profits for each of your trades for free. As well as your profits on all your trades.',
    },
    {
      image: 'static/images/feature.jpg',
      title: 'Compare your performance with that of other users',
      description: 'Finally, we suggest that you compare your results with those of other users. And this in order to motivate you to improve your performance.',
    },
  ];
  return (
    <div>
    <Card style={{paddingBottom:"20px"}}>
    <CardMedia
        component="img"
        height="500"
        image="static/images/home_img.jpg"
        alt="home image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Cryptocurrency simulation plateform (By Elie A.)
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        In this 100% free and fun platform, you can: buy, sell, calculate your profits and compare your performance with those of other users.
        </Typography>
        <Button component={Link} to="/login" variant="contained" color="primary">
          Login
        </Button>
        <Button component={Link} to="/signup"variant="outlined" color="primary">
          Signup
        </Button>
      </CardContent>
      <Features items={features}/>
    </Card>
  </div>
  );
};

export default Home;


