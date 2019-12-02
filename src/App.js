import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
      <Route component={NF404} />
      </Switch>
    </main>
    )
}


export default App;
