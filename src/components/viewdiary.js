import Diary from "./diary"; // Importing diary component
import { useEffect, useState } from "react";// Importing react hooks
import axios from "axios"; // Importing axios for http requests

// Define read component
const ViewDiary = () => {
//State variable movies to store entry data and setEntry function to update
  const [entries, setEntry] = useState([]);

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

  // Render component
  return (
    <div>
      <h3>Hello from read component!</h3>
      <Diary myDiary={entries} ReloadData={reloadData} />
    </div>
  );
}
// export ViewDiary component
export default ViewDiary;