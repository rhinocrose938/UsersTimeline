import React from 'react';
import Nav from  './components/Nav';
import Users from './components/Users';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* This is the main component which contains the 
   Nav component and the Users component. Here the route
   to the component Users is set using BrowserRouter, Switch
   and Route. This component is exported to index.js and gets
   rendered there through React-Dom in index.html div component
   with id of root */

function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
     <Switch>
     <Route path = "/" exact  component = {Users}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
