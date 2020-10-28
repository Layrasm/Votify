import React, {useState, useEffect} from "react";
import axios from "axios";
import {Card, CardColumns} from 'react-bootstrap';

const Candidates = (props) => {

  const [candidates, setCandidates] = useState([]);

 

  useEffect(() => {
    axios
    .get(`/api/ballots/${props.ballotID}/candidates`)
    .then((response) => {
      setCandidates(response.data);
    })
    .catch((error) => {
      alert("error retrieving candidates")
    });



  }, []);

  
  const renderCandidates = () => {
    return candidates.map((candidate) => (
      <CardColumns key={candidate.id}>
        <Card>
          <Card.Img variant="top" src={candidate.image_url} /> 
          <Card.Body>
            <Card.Title>Name: {candidate.first_name} {candidate.last_name}</Card.Title>
            <Card.Body>Age: {candidate.age}</Card.Body>
            <Card.Text>Party: {candidate.party}</Card.Text>
            <Card.Text>Policy: {candidate.policy}</Card.Text>
          </Card.Body> 
        </Card>
      </CardColumns>
    ));
  }







  return(
    <div>
      {renderCandidates()}
    </div>

  );

};

export default Candidates;

