import React, {useState, useEffect} from 'react';
import axios from "axios";
// import { AuthContext } from "../providers/AuthProvider";
import Candidates from "./Candidates";
import {Container, Jumbotron} from 'react-bootstrap';

// import {Card} from "bootstrap";

const Ballot = (props) => {
  // const { user } = useContext(AuthContext);
  const [ballots, setBallots] = useState([]);


  useEffect(() => {
    axios
      .get("/api/ballots")
      .then((response) => {
        setBallots(response.data);
      })
      .catch((error) => {
        alert("error retrieving ballot")
      });



  }, []);


  return (
    <>
    
      {ballots.map((ballot) => (
      <Container>

      
      <h1>Ballot</h1>
      
      <p1>{ballot.year}</p1>
      <Candidates ballotID={ballot.id} />
      
      
     
      </Container>
      ))}
    
   </>
  );
};


export default Ballot;