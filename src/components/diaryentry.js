import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
//import axios from "axios";

const DiaryEntry = () => {

  // const [title, setTitle] = useState('');
  // const[entry, setEntry] = useState('');


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const diary = {title,entry};
//     console.log(diary);

//     axios.post('http://localhost:4000/api/savedentries',diary)
//     .then((res)=>{console.log(res.data)})
//     .catch();
// }
    return (
      <Form >
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Entry Title</Form.Label>
        <Form.Control  placeholder="Enter your title" />
      </Form.Group>
      <>
      
      <Form.Label>Main Entry</Form.Label>
      <FloatingLabel controlId="mainEntry" >
        <Form.Control
          as="textarea"
          placeholder="Write whatever you feel like..."
          style={{ height: '100px' }}
        />
        
      </FloatingLabel>
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