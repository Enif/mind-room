import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// if (process.env.NODE_ENV === 'production') {
if (true) {
  console.log('production mode');
  (window as any).dataLayer = (window as any).dataLayer || [];
  const gtag = function (...arg: any) {
    (window as any).dataLayer.push(arg);
  }
  gtag('js', new Date());
  gtag('config', 'G-W964GTHFS5');
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
