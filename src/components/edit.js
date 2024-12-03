import React from 'react';// Import react
import { useParams } from 'react-router-dom';// Import useParams to access route parameters
import { useState, useEffect } from 'react';// Import useState and useEffect hooks
import axios from 'axios';// Import axios for HTTP requests
import { useNavigate } from "react-router-dom";// Import useNavigate for navigation
import { Link } from "react-router-dom"; // Link for navigtion

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
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Entry Title: </label>
                <input type="text" 
                className="form-control" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Main Entry: </label>
                <input type="text" 
                className="form-control" 
                value={entry} 
                onChange={(e) => setEntry(e.target.value)} />
            </div>
            <div className="form-group">
                <br></br>
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
);
}