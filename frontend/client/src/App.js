import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import Header from './Header/Header';
function App() {
  return (
  <Router>
  <Routes>
    <Route exact path="/:page?" render={(props)=> <Header {...props} /> } >
    </Route>
  </Routes>
  </Router>
);
}

export default App;
