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
import './components/Cart/cart.css'
import './components/Saber/saber.css'
import './components/Carousel/carousel.css'
import './components/CustomSaber/customsaber.css'
import './components/BrowseSelection/browseselection.css'
import './components/Electronics/electronics.css'
import './components/Footer/largefooter.css'
import './components/Checkout/checkout.css'
import './components/Confirmation/confirmation.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);