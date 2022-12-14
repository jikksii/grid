import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Grid from './components/Grid';

const root = ReactDOM.createRoot(document.getElementById('root'));

const indexes = [
  9,29,50,70,89,109,129,130,131,112,113,114,115,136,156,176,175,
  154,173,194,197,217,237,257,278,298,318,338,357,376,375,374,353,332,312,292,272,
  251,250,249,248,247,266,286,306,326,345,364,363,362,341,320,300,280,260,241,221,201,
  181,162,163,164,165,184,144,142,122,103,104,105,106,127,128,168,170
]

root.render(
  <React.StrictMode>
    <Grid indexes={indexes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
