import React from 'react';
import Home from '../Home/Home';
import Register from '../Register/Register';
import Resume from '../Resume/Resume';
import Login from '../Login/Login';
import { HashRouter as Router, Route, link } from 'react-router-dom';
import Test from '../Test/Test';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/registro" component={Register}/>
        <Route path="/resumen" component={Resume}/>
        <Route path="/iniciarSesion" component={Login}/>
        <Route path="/test" component={Test}/>
      </Router>


    </div>
  );
}

export default App;
