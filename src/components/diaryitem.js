
// Importing all relevant imports 
import { useEffect } from "react"; 
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"; 
import Button from "react-bootstrap/Button";
import axios from "axios"; 
import { format } from 'date-fns';

const DiaryItem = (props) =>{

      // Function to handle deletion of a movie
  const handleDelete = (e)=>{
    
    e.preventDefault();
    console.log('Deleting entry with ID:', props.myDiary._id);

    // Send a delete request to server using axios
    axios.delete('http://localhost:4000/api/savedentries/' + props.myDiary._id)
    .then((res)=>{
      // Calls reload functin passed from parent 
      props.ReloadData();
    })
    .catch((err) =>{
     
      console.log(err)
    });
  }
    //Format date
    const formattedDate = format(new Date(props.myDiary.createdAt), 'PPPpp'); 

    useEffect(() => {
      console.log("Diary Item props:", props.myDiary);
  }, [props.myDiary]);
     // render diary details in card component
  return (
    <div className="app-container">
    <Card style={{ width: '18rem', height: '15rem', overflow: 'hidden' }}>
    <Card.Body style={{ flex: '1 1 auto', overflow: 'hidden' }}>
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
        </Card.Body>
      
    
       
        <Card.Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
           {/* Button to delete entry */}
        <Button className="btn btn-danger me-2" onClick={handleDelete}>     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg></Button>
   
        {/* Link to edit the entry, navigating to the edit route */}
        <Link className = "btn btn-primary me-2" to={"/edit/" +props.myDiary._id}>Edit<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
        </svg></Link>
         
         {/* Link to read the entry, navigating to the readentry route */}
         <Link className = "btn btn-primary me-2" to={"/readentry/" +props.myDiary._id}>Read<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
        </svg></Link>

</Card.Footer>
    </Card>
    
    </div>
  );
}
    
export default DiaryItem