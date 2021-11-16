import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <>

      <Header />
      <Switch>
        <Route exact path="/">
          <rockets />
        </Route>
        <Route path="/myProfile">
          <myprofile />
        </Route>
        <Route path="/Dragons">
          <dragons />
        </Route>
        <Route path="/mission">
          <missions />
        </Route>
      </Switch>

    </>
  );
}

export default App;
