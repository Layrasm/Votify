import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import {Form, Container, Button} from "react-bootstrap";

const Login = (props) => {
  const history = useHistory();

  const { handleLogin } = useContext(AuthContext);
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.value);
    console.log(password.value);

    //api call here pass {email, password}
    handleLogin({ email: email.value, password: password.value }, history);
  };
  return (
    <>
      <Container style={{width:"40%"}}>
      <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Group>
          <Form.Control autoFocus {...email} />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" {...password} />
        </Form.Group>
        <Button className="m-1" type="submit">Login</Button>
        <Button className="m-1" href="/">Back</Button>
        </Form>
      </Container>
    </>
  );
};



export default Login;