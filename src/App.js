import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import RegisterForm from './components/RegisterForm.js'
import AdoptForm from './components/AdoptForm.js'
import NavBar from './components/NavBar.js'
import Carousel from './components/Carousel.js'
import RehomeIndex from './components/RehomeIndex.js'
import RehomeShow from './components/RehomeShow.js'
import RehomeForm from './components/RehomeForm.js'
import Login from './components/Login.js'
import Footer from './components/Footer.js'
import ShelterShow from './components/ShelterShow.js'
import ShelterIndex from './components/ShelterIndex.js'

// Note to self: Don't Forget to put show paths before their index paths

const App = () => {
  return(
    <React.Fragment>
          <NavBar />
          <main>
            <Switch>
            <Route path='/home' component={ Carousel } />
            <Route path='/dogs/rehome/:id' component={ RehomeShow } />
            <Route path='/dogs/rehome' component={ RehomeIndex } />
            <Route path='/users/register' component={ RegisterForm } />
            <Route path='/dogs/adopt' component={ AdoptForm } />
            <Route path='/dogs/new' component={ RehomeForm } />
            <Route path='/users/login' component={ Login } />
            <Route path='/dogs/shelter/:id' component={ ShelterShow } />
            <Route path='/dogs/shelter' component={ ShelterIndex } />
            </Switch>
          </main>
          <Footer />
      </React.Fragment>
    )
}


export default App;
