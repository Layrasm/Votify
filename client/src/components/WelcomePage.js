import React from 'react';
import { useHistory } from "react-router-dom";
import {Button, Container, Jumbotron} from 'react-bootstrap';



const WelcomePage = () => {
  const history = useHistory();

  const login = () =>{ 
    let path = `login`; 
    history.push(path);
  }

  const register = () =>{ 
    let path = `register`; 
    history.push(path);
  }

  return(
  <>
  
  

  
  
  <Jumbotron fluid>
    <h1>Welcome to Votify</h1>
    <p>The secure and convenient voting solution</p>
  
  
  <Container style={{width:'40%'}}>
  <h3 className="landing">Please register or sign in</h3>
  <Button onClick={login} variant="info" block>Login</Button>
  <Button onClick={register} variant="success" block>Sign Up</Button>
  </Container>
  </Jumbotron>
 
  </>
)}

export default WelcomePage;