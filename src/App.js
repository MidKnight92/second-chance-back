import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
//Components
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
import DogProfile from './components/DogProfile.js'
import DogProfileEdit from './components/DogProfileEdit.js'
import UserMatches from './components/UserMatches.js'


const NF = () => {
    return (
      <div style={{textAlign: 'center', fontWeight:'bolder'}}>
        <h1> 404 - NOT FOUND </h1>
        <h3> You Get The Cone of Shame </h3>
        <img style={{width: '40vw'}}src='https://images.unsplash.com/photo-1523735197402-394022990845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'/>
      </div>
    )
};

const App = () => {
    return (
        <React.Fragment>
          <NavBar />
          <main>
            <Switch>
            <Route path='/' exact component={ Carousel } />
            <Route path='/dogs/rehome/:id' component={ RehomeShow } />
            <Route path='/dogs/rehome' exact component={ RehomeIndex } />
            <Route path='/users/register' exact component={ RegisterForm } />
            <Route path='/dogs/adopt' exact render={(props)=> <AdoptForm {...props}/>} />
            <Route path='/dogs/new'exact render={(props) => <RehomeForm {...props}/>} />
            <Route path='/users/login' exact component={ Login } />
            <Route path='/dogs/shelter/:id' component={ ShelterShow } />
            <Route path='/dogs/shelter' exact component={ ShelterIndex } />
            <Route path='/dogs/:id/edit' render={(props) => <DogProfileEdit {...props}/>}/> 
            <Route path='/dogs/:id' render={(props) => <DogProfile {...props}/>}/> 
            <Route path='/users/:id' render={(props) => <UserMatches {...props}/>} />
            <Route path='*' component ={ NF } />
            </Switch>
          </main>
          <Footer />
      </React.Fragment>
    )
}


export default App;