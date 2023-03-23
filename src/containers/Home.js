import React, { useState, useRef, useEffect } from 'react';
import { Grid, Row, Col as Column } from '../components/FlexBox/FlexBox';
import StickerCard from '../components/Widgets/StickerCard/StickerCard';
import { withStyle, useStyletron } from 'baseui';
import { useSelector, useDispatch } from 'react-redux';
import { update_market_pairs } from '../state/MarketSlice/marketSlice';

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

  const dispatch = useDispatch();
  const market_pairs = useSelector((state) => state.market.market_pairs);

  const getTickerBySymbol = (data) => {
    let ticker = {};  
    data?.forEach(item => {
        let symbol = item.symbol || item.s;
        ticker[symbol] = {
            symbol: symbol,
            lastPrice: item.lastPrice || item.c,
            priceChange: item.priceChange || item.p,
            priceChangePercent: item.priceChangePercent || item.P,
            highPrice: item.highPrice || item.h,
            lowPrice: item.lowPrice || item.l,
            quoteVolume: item.quoteVolume || item.q,
        }
    })
    return ticker;
}
  const connectSocketStreams = (streams) => {
    streams = streams.join('/');
    let connection = btoa(streams);
    connectionObj[connection] = new WebSocket(`wss://stream.binance.com:9443/stream?streams=${streams}`);
    connectionObj[connection].onmessage = evt => {
      let ticker = getTickerBySymbol(JSON.parse(evt.data).data);
        dispatch(update_market_pairs(ticker));
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


  return (
    <Grid fluid={true}>
      <Row>
        {market_pairs && Object.values(market_pairs).map((ticker, index) =>
          <Col lg={3} sm={6} xs={12} className={mb30} key={index}>
            <StickerCard
              title={ticker.symbol}
              subtitle={ticker.symbol}
              icon={ticker.symbol}
              price= {ticker.lastPrice}
              link="#"
              linkText='Full details'
            />
          </Col>)}

      </Row>
    </Grid>
  );
};

export default Home;


