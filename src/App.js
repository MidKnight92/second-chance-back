import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const NF404 = () => {
  return (
    <div>
    <h1>404 Error - Page Not Found</h1>
    </div>
    )
};
const App = () => {
  return(
    <main>
    <Navbar />
      <Switch>
      <Route path='' component={NF404} />
      </Switch>
    </main>
    )
}


export default App;
