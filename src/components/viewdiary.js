import Diary from "./diary"; // Importing diary component
import { useEffect, useState } from "react";// Importing react hooks
import axios from "axios"; // Importing axios for http requests
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Quote from "./quote";

// Define read component
const ViewDiary = () => {
//State variable movies to store entry data and setEntry function to update and search query
  const [entries, setEntry] = useState([]);
  const [query, setQuery] = useState('');

  //Fetch data from api and update entries state
  const reloadData = ()=>{
    // Make get request
    axios.get('http://localhost:4000/api/savedentries')
    .then((response) => {
      // log response to console
      console.log(response.data);
      // Update state with fetch movie data
      setEntry(response.data);
    })
    .catch((error) => {
      // Log errors to console
      console.log(error);
    });
  }
  useEffect(() => {
    // Call reloadData to detch and set movie data
      reloadData();
  },[]);

    // Filter entries based on the search query
    const filteredEntries = entries.filter((entry) =>
      entry.title.toLowerCase().includes(query.toLowerCase()) || // Search in title
      entry.entry.toLowerCase().includes(query.toLowerCase())    // Search in entry content
    );

      // Handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value); // Update the search query
  };
  // Render component
  return (
    <div className="app-container">
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={query} 
              onChange={handleSearchChange}
            />
          </Col>
      
        </Row>
      </Form>
      {/* Render Diary Component with Filtered Entries */}
      <div>
        <Diary myDiary={filteredEntries} ReloadData={reloadData} /> {/* Pass filteredEntries */}
      </div>
    </div>
  );
  
  
}
// export ViewDiary component
export default ViewDiary;