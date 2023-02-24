import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import { Route, Switch } from "react-router-dom";
import Thoughts from './Thoughts';
import FrontPage from './FrontPage';
import Feedback from './Feedback';
import { Container } from "semantic-ui-react";
import "./IndiThought.css";
import "./Thoughts.css";
function App() {

  const [opinions, setOpinions] = useState([])
  
  function handleOpinions(answer){
    setOpinions(answer)
  }
  //http://username.github.io/reponame/db.json
  //http://localhost:3001/opinions
  useEffect(() => {
    fetch('http://localhost:3001/opinions')
        .then(r => r.json())
        .then(answers => {
            console.log(answers)
            handleOpinions(answers);
        });
}, []);


  return (
    <Container>

      <Header />
      <Switch>

        <Route exact path="/">
          <FrontPage />
        </Route>

        <Route exact path="/thoughts">
          <Thoughts opinions={opinions}/>
        </Route>

        <Route exact path="/feedback">
          <Feedback />
        </Route>
        
      </Switch>
      
    </Container>
  );
}

export default App;
