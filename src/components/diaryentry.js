// Importing all relevant imports
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

const DiaryEntry = () => {

  // State to manage title and entry and mood
  const [title, setTitle] = useState('');
  const[entry, setEntry] = useState('');
  const [mood, setMood] = useState('neutral'); 

// Handles form submission 
  const handleSubmit = (e) => {
    
    e.preventDefault();
    // create object with current state
    const diary = {title,entry, mood};
   
    console.log(diary);

    // Send data to backend using axios
    axios.post('http://localhost:4000/api/savedentries',diary)
    .then((res)=>{
      console.log(res.data)
       // Clear the entry and title field after submission and set mood to netural
      setTitle(''); 
      setEntry('');
      setMood('neutral');
    })
    .catch((err) =>{
      // Log any errors
      console.error(err);
    });
}
    return (
      <div className="app-container">
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
      <Form.Group className="mb-3">
        <Form.Label>Mood</Form.Label>
        <Form.Select value={mood} onChange={(e) => setMood(e.target.value)}>
           {/* Options for different moods */}
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="neutral">Neutral</option>
          <option value="excited">Excited</option>
          <option value="angry">Angry</option>
          <option value="tired">Tired</option>
        </Form.Select>
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
     
// Export so can be used in other parts of the app
  export default DiaryEntry;