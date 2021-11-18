import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/header';
import Missions from './components/Missions';
import Rockets from './components/rockets';
import MyProfile from './components/myProfile';
import Dragons from './components/dragons';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/mission">
          <Missions />
        </Route>
        <Route path="/myProfile">
          <MyProfile />
        </Route>
        <Route path="/Dragons">
          <Dragons />
        </Route>
      </Switch>

    </>
  );
}

export default App;
