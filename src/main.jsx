import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Header/header.css'
import './assets/styles/body.css'
import './components/LightSabers/lightsabers.css'
import './components/Saber/saber.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);