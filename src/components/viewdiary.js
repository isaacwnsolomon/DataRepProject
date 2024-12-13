// importing relevant imports
import Diary from "./diary"; 
import { useEffect, useState } from "react";
import axios from "axios"; 
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Quote from "./quote";
import DiaryItem from "./diaryitem";

// Define read component
const ViewDiary = () => {
//State variables to store entry data and setEntry function to update and search query
  const [entries, setEntry] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedMood, setSelectedMood] = useState('');

  //Fetch data from api and update entries state
  const reloadData = ()=>{
    // Make get request
    axios.get('http://localhost:4000/api/savedentries')
    .then((response) => {
     
      console.log(response.data);
      // Update state with fetch entry data
      setEntry(response.data);
    })
    .catch((error) => {
     
      console.log(error);
    });
  }
  useEffect(() => {
    // Call reloadData to detch and set diary data
      reloadData();
  },[]);

    // Combine mood and search filtering
  const finalFilteredEntries = entries
  .filter((entry) =>
    selectedMood ? entry.mood === selectedMood : true
  )
  .filter((entry) =>
    entry.title.toLowerCase().includes(query.toLowerCase()) ||
    entry.entry.toLowerCase().includes(query.toLowerCase())
  );
      // Handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value); // Update the search query
  };
  // Handle mood selection from the dropdown
const handleMoodChange = (e) => {
  setSelectedMood(e.target.value); // Update the selected mood state
};

  // Render component
  return (
    <div className="app-container">
       {/* Display the Quote */}
       <Quote />

      {/* Mood Filter Dropdown */}
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="mood-filter" style={{ marginRight: "1rem" }}>
          Filter by Mood:
        </label>
        <select id="mood-filter" value={selectedMood} onChange={handleMoodChange}>
          <option value="">All</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="neutral">Neutral</option>
          <option value="excited">Excited</option>
          <option value="angry">Angry</option>
          <option value="tired">Tired</option>
        </select>
      </div>

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
    {/* Render Filtered Entries */}
    <div>
        {finalFilteredEntries.length > 0 ? (
          finalFilteredEntries.map((entry) => (
            <DiaryItem
              key={entry._id}
              myDiary={entry}
              ReloadData={reloadData}
            />
          ))
        ) : (
          <p>No entries match your search or selected mood.</p>
        )}
      </div>

      {/* Render Diary Component */}
      <Diary myDiary={finalFilteredEntries} ReloadData={reloadData} />
    </div>
  );
};

  

// export ViewDiary component
export default ViewDiary;