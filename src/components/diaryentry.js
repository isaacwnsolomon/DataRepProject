import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

const DiaryEntry = () => {

  // State for title and entry
  const [title, setTitle] = useState('');
  const[entry, setEntry] = useState('');

// Handles form submission 
  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();
    // create object with current state
    const diary = {title,entry};
    console.log(diary);

    // Send data to backend using axios
    axios.post('http://localhost:4000/api/savedentries',diary)
    .then((res)=>{
      console.log(res.data)
      setTitle(''); // Clear the title input field after submission
      setEntry(''); // Clear the entry input field after submission
    })
    .catch((err) =>{
      console.error(err);
    });
}
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
     

  export default DiaryEntry;