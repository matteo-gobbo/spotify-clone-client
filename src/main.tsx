import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Track from './Track';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/track">
          <Track />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
