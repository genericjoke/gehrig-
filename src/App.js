
import './App.css';
import Header from './Header';
import { Route } from 'react-router-dom';
import Thoughts from './Thoughts';
import FrontPage from './FrontPage';
// import Feedback from './Feedback';
import { Container } from "semantic-ui-react";

function App() {

  return (
    <Container>

      <Header />
    {/* <Switch> */}
      {/* <Route path="/thoughts">
        <Thoughts />
      </Route> */}
    {/* </Switch> */}

      <FrontPage />

    </Container>
  );
}

export default App;
