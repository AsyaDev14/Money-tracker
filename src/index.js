import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { HashRouter as BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Money-tracker">
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={1500} theme="dark" />
    </Provider>
  </BrowserRouter>
);
