import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update_market_pairs } from '../state/MarketSlice/marketSlice';



const MarkerPlace = () => {
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


  return (
      <>
        {market_pairs && Object.values(market_pairs).map((ticker, index) =>
        ticker.lastPrice
          )}

      </>
  );
};

export default MarkerPlace;


