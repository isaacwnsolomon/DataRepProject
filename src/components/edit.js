import React from 'react';// Import react
import { useParams } from 'react-router-dom';// Import useParams to access route parameters
import { useState, useEffect } from 'react';// Import useState and useEffect hooks
import axios from 'axios';// Import axios for HTTP requests
import { useNavigate } from "react-router-dom";// Import useNavigate for navigation
import { Link } from "react-router-dom"; // Link for navigtion
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
            // Set title and entry
            setTitle(response.data.title);
            setEntry(response.data.entry);
        })
        .catch((error) => {
            // Log any errors
            console.log(error);
            console.error('Error fetching entry:', error); 
        });
    // Dependency array ensures this runs when 'id' changes
}, [id]);

 // Function to handle form submission
 const handleSubmit = (event) => {
    // Prevent default form submission behaviour
    event.preventDefault();
    // Create a new entry object with updated details
    const newEntry = { id, title, entry };
    // Send PUT request to update the movie
    axios.put('http://localhost:4000/api/savedentries/' + id, newEntry)
        .then((res) => {
            // log response data
            console.log(res.data);
            // Redirect to read page
            navigate(`/read/${id}`);
        });
}

//render form for editing entry
return (
    <Form onSubmit={handleSubmit}>
        {/* Title input */}
    <Form.Group className="mb-3" controlId="title">
      <Form.Label>Entry Title</Form.Label>
      <Form.Control  type="text"
        placeholder="Enter your title"
        value={title} // Bind input to title state
        onChange={(e) => setTitle(e.target.value)} // Update state on change
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
          style={{ height: '100px' }}
          value={entry} // Bind input to entry state
          onChange={(e) => setEntry(e.target.value)} // Update state on change
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
   
  );

};
   