import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useFormInput } from "../customHooks/useFormInput";
import { AuthContext } from "../providers/AuthProvider";
import {Form, Container, Button} from "react-bootstrap";


const Register = (props) => {
  const email = useFormInput("", "Email");
  const password = useFormInput("", "Password");
  const passwordConfrimation = useFormInput("", "Password Confirmation");
  const firstName = useFormInput("","First Name");
  const lastName = useFormInput("", "Last Name");

  const { handleRegister } = useContext(AuthContext);
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    //check valid email
    if (password.value !== passwordConfrimation.value) {
      alert("passwords don not match");
    } else {
    
      // register user
      handleRegister({
    
        email: email.value,
        password: password.value,
        passwordConfrimation: passwordConfrimation.value,
        first_name: firstName.value,
        last_name: lastName.value
      },
      history
      );
    }
  };


  return (
    <>
      <Container style={{width:"40%"}}>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control autoFocus type="email" {...email} />
        </Form.Group>
        <Form.Group>
          <Form.Control {...firstName} />
        </Form.Group>
        <Form.Group>
          <Form.Control {...lastName} />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" {...password} />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" {...passwordConfrimation} />
        </Form.Group>
        <Button className="m-1"  type="submit">Register</Button>
        <Button className="m-1"  href="/">Back</Button>
      </Form>
      </Container>
    </>
  );
};

export default Register;