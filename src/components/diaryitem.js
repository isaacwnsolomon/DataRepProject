
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

    const formattedDate = format(new Date(props.myDiary.createdAt), 'PPPpp'); 

     // render movie details in card component // <footer>{props.mydiary.entry}</footer>
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.myDiary.title}</Card.Title>
        <Card.Text>
          {props.myDiary.entry}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          {formattedDate}
        </Card.Subtitle>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
    
export default DiaryItem