
import { useEffect } from "react"; // Importing useEffect for side effects
import Card from 'react-bootstrap/Card';//Imort card from react-boostrap
import { Link } from "react-router-dom"; // Link for navigtion
import Button from "react-bootstrap/Button";// Button from bootstrap
import axios from "axios"; // Axios for http requests

const DiaryItem = (props) =>{

    useEffect(() => {
        // Log current diary when it changes
    console.log("Diary Item:", props.myDiary);
    }, [props.myDiary]);

     // render movie details in card component // <footer>{props.mydiary.entry}</footer>
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.myDiary.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {props.myDiary.entry}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
    
export default DiaryItem