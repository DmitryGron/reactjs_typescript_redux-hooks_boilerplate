import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { configureFakeBackend } from '../mock-server';
import App from '../layout/App/App';

process.env.REACT_APP_BE_PROD !== 'false' ? console.log('PROD') : configureFakeBackend();
const store = configureStore();

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
