import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import RegisterForm from './components/RegisterForm.js'
import AdoptForm from './components/AdoptForm.js'
import NavBar from './components/NavBar.js'
import Carousel from './components/Carousel.js'


const App = () => {
  return(
      <main>
        <NavBar />
        <Switch>
        <Route path='/' component={Carousel} />
        <Route path='/users/register' component={ RegisterForm } />
        <Route path='/dogs/adopt' component={ AdoptForm } />
        </Switch>
      </main>
    )
}


export default App;
