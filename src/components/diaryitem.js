
import { useEffect } from "react"; // Importing useEffect for side effects
import Card from 'react-bootstrap/Card';//Imort card from react-boostrap
import { Link } from "react-router-dom"; // Link for navigtion
import Button from "react-bootstrap/Button";// Button from bootstrap
import axios from "axios"; // Axios for http requests
import { format } from 'date-fns';

const DiaryItem = (props) =>{

    useEffect(() => {
        // Log current diary when it changes
    console.log("Diary Item:", props.myDiary);
    }, [props.myDiary]);

      // Function to handle deletion of a movie
  const handleDelete = (e)=>{
    // Prevents default form submission behaviour
    e.preventDefault();
    console.log('Deleting entry with ID:', props.myDiary._id);

    // Send a delete request to server using axios
    axios.delete('http://localhost:4000/api/savedentries/' + props.myDiary._id)
    .then((res)=>{
      // Calls reload functin passed from parent 
      props.ReloadData();
    })
    .catch((err) =>{
      // Log errors
      console.log(err)
    });
  }
    const formattedDate = format(new Date(props.myDiary.createdAt), 'PPPpp'); 

     // render diary details in card component // <footer>{props.mydiary.entry}</footer>
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.myDiary.title}</Card.Title>
        <Card.Text>
          {props.myDiary.entry}
        </Card.Text>
        <Card.Subtitle
          className="mb-2 text-muted">Mood: {props.myDiary.mood}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {formattedDate}
        </Card.Subtitle>
        <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
        {/* Link to edit the movie, navigating to the edit route */}
        <Link className = "btn btn-primary" to={"/edit/" +props.myDiary._id}>Edit</Link>
         
         {/* Link to edit the movie, navigating to the edit route */}
         <Link className = "btn btn-primary" to={"/read/" +props.myDiary._id}>Read</Link>
        
      </Card.Body>
    </Card>
  );
}
    
export default DiaryItem