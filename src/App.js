import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';
import myTheme from './theme';

function App() {
  const engine = new Styletron();
  return (
    //Styletron is the style engine for base-web
    //BaseProvider will save the style state and LightTheme
    <StyletronProvider value={engine}>  
      <BaseProvider theme={myTheme}> 
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
