import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ImageUploader from '../images/ImageUploader';
import {Card, Jumbotron, Image, Col, Row, Container, Button} from 'react-bootstrap';


const MyAccount = (props) => {

  const { user } = useContext(AuthContext);
  const [image, setImage] = useState([]);

  useEffect(() => {
  
  
  }, []); 



  return(
  <div>
  <Card style={{ width: '400px' }}>
    <Card.Img variant="top" src={user.image} />
    <Card.Body>
      <Card.Title>{user.first_name} {user.last_name}</Card.Title>
      <Card.Text>
      Email: {user.email}
      </Card.Text>
      <Button variant="primary">Edit Info</Button>
    </Card.Body>
    <small>Add image or upload new image. Page will refresh automatially.</small>
    <ImageUploader userID={user.id}/>
  </Card>

      
  </div>
  );
};

export default MyAccount;