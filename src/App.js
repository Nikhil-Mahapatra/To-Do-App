import React from 'react';
import Header from './Components/Header/Header';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import About from './Components/About/About';
import Todo from "./Components/Todo/todo";
//importing react bootstrap
import { Card } from 'react-bootstrap';
//importing react router component
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={Todo} />
          <Route path="/RegistrationForm" component={RegistrationForm} />
          <Route path="/About" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


const Home = () => {
  return(
      <div>
          <Card>
          <Card.Body>
              <Card.Title>Welcome to TO-DO!</Card.Title>
              <Card.Text>
              This is a to-do homepage.
              </Card.Text>
          </Card.Body>
          </Card>
      </div>
  )
}
export default App;
