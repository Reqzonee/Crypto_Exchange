import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider, ColorModeScript, theme} from "@chakra-ui/react"; 
import ColorModeSwitcher from './ColorModeSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} > 
    <ColorModeScript />
    <ColorModeSwitcher/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
