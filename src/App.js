
import './App.css';
import Header from './Header';
import { React } from 'react'
import { Route, Switch } from "react-router-dom";

import Thoughts from './Thoughts';
import FrontPage from './FrontPage';
import Feedback from './Feedback';
import { Container } from "semantic-ui-react";
function App() {

  return (
    <Container>

      <Header />
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/thoughts">
          <Thoughts />
        </Route>
      </Switch>
      
    </Container>
  );
}

export default App;
