// Adding allr relevant imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

//Define edit component
export default function Edit(props){
    //Extract id parameter from url
    const {id} = useParams();

    // State variables to hold entry details
    const [title, setTitle] = useState("");
    const [entry, setEntry] = useState("");

    // Intiialise navgiate function 
    const navigate = useNavigate();

      // useEffect to fetch diary data 
useEffect(() => {
    // Fetch by id
    axios.get('http://localhost:4000/api/savedentries/' + id)
        .then((response) => {
            console.log('Response Data:', response.data); 
           
            setTitle(response.data.title);
            setEntry(response.data.entry);
        })
        .catch((error) => {
          
            console.log(error);
            console.error('Error fetching entry:', error); 
        });
    // Dependency array ensures this runs when 'id' changes
}, [id]);

 // Function to handle form submission
 const handleSubmit = (event) => {
    
    event.preventDefault();
    // Create a new entry object with updated details
    const newEntry = { id, title, entry };
    // Send PUT request to update the entry
    axios.put('http://localhost:4000/api/savedentries/' + id, newEntry)
        .then((res) => {
          
            console.log(res.data);
            // Redirect to read page
            navigate(`/readentry/${id}`);
        });
}

//render form for editing entry
return (
    <div className="app-container">
    <Form onSubmit={handleSubmit}>
        {/* Title input */}
    <Form.Group className="mb-3" controlId="title">
      <Form.Label>Entry Title</Form.Label>
      <Form.Control  type="text"
        placeholder="Enter your title"
        // Bind input to title state
        value={title} 
         // Update state on change
        onChange={(e) => setTitle(e.target.value)}
         />
    </Form.Group>
    <>
    {/* Entry body input */}
    <Form.Group className="mb-3" controlId="mainEntry">
      <Form.Label>Main Entry</Form.Label>
      <FloatingLabel controlId="mainEntry">
        <Form.Control
          as="textarea"
          placeholder="Write whatever you feel like..."
          style={{ height: '400px' }}
          value={entry}
          onChange={(e) => setEntry(e.target.value)} 
        />
      </FloatingLabel>
    </Form.Group>
      
 
  </>   
  {/* Save Button */}
    <div>
      <br></br>
      <Button variant="primary" type="submit" >
        Save
      </Button>
     
    </div>
  </Form>
  </div>
  );

};
   