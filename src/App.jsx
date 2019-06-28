import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css'
import components from './components'

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ol>
        {props.components.map((component, idx) => {
          const showName = component.name.replace(/(?=([A-Z]))/g, " ").trim()
          return <li key={idx}><Link to={'/' + component.name}>{showName}</Link></li>
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
