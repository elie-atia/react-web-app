import React, { useRef, useEffect } from 'react';
import { Grid, Row, Col as Column } from '../components/FlexBox/FlexBox';
import StickerCard from '../components/Widgets/StickerCard/StickerCard';
import { HomeIcon } from '../assets/images/HomeIcon';
import { withStyle, useStyletron } from 'baseui';


const Col = withStyle(Column, () => ({
  '@media only screen and (max-width: 574px)': {
    marginBottom: '30px',

    ':last-child': {
      marginBottom: 0,
    },
  },
}));

const Home = () => {
  const [css] = useStyletron();
  const ws = useRef(null);
  let connectionObj = {};


  const connectSocketStreams = (streams) => {
    streams = streams.join('/');
    let connection = btoa(streams);
    connectionObj[connection] = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);
    connectionObj[connection].onmessage = evt => {
        console.log(evt.data)
    }
    if (connectionObj[connection]) {
        connectionObj[connection].onerror = evt => {
            console.error(evt);
        }
    }
}

const disconnectSocketStreams = (streams) => {
    streams = streams.join('/');
    let connection = btoa(streams);
    if (connectionObj[connection].readyState === WebSocket.OPEN) {
        ws.current && ws.current.close();
    }  
}




useEffect(() => {
    connectSocketStreams(['!ticker@arr']);
    return () => {
        disconnectSocketStreams(['!ticker@arr'])
    }
}, []);


  const mb30 = css({
      marginBottom: '16px',

  });

  const stickerMenu = [
    {
      title: 'Title 1',
      subtitle: 'subtitle 1',
      icon: <HomeIcon />,
    },
    {
      title: 'Title 2',
      subtitle: 'subtitle 2',
      icon: <HomeIcon />,
    },
    {
      title: 'Title 3',
      subtitle: 'subtitle 3',
      icon: <HomeIcon />,
    },
    {
      title: 'Title 4',
      subtitle: 'subtitle 4',
      icon: <HomeIcon />,
    },
    {
      title: 'Title 5',
      subtitle: 'subtitle 5',
      icon: <HomeIcon />,
    },
  ]
  return (
    <Grid fluid={true}>
      <Row>
        {stickerMenu.map((sticker,index)=>
        <Col lg={3} sm={6} xs={12} className={mb30}>
        <StickerCard
          title= {sticker.title}
          subtitle= {sticker.subtitle}
          icon={sticker.icon}
          price='5$'
          link="#"
          linkText='Full details'
        />
      </Col>)}
        
      </Row>
    </Grid>
  );
};

export default Home;


