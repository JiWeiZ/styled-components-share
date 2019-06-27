import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import components from './components/index'

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ol>
        {props.components.map((component, idx) => {
          if (component.name === 'Home') {
            return (
              <li key={idx}><Link to="/">{component.name}</Link></li>
            )
          } else {
            return (
              <li key={idx}><Link to={'/' + component.name}>{component.name}</Link></li>
            )
          }
        })}
      </ol>
    </div>
  )
}

function Main(props) {
  return (
    <div className="main">
      <div className="content">
        {props.components.map((component, idx) => {
          if (component.name === 'Home') {
            return (
              <Route key={idx} path="/" exact component={component}></Route>)
          } else {
            return (
              <Route key={idx} path={'/' + component.name} component={component}></Route>)
          }
        })}
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sidebar components={components} />
          <Main components={components} />
        </div>
      </Router>
    );
  }
}

export default App;
