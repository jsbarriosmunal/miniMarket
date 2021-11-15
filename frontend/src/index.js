import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-lz4lgmtg.us.auth0.com"
      clientId="tKBtMX3riN8RbzuO56TeHDf7406P6vWR"
      redirectUri={window.location.origin}
    >  
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
