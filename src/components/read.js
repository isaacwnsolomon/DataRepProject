import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the diary entry ID
import axios from "axios";

const Read = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const [diaryEntry, setDiaryEntry] = useState(null); // Store the fetched diary entry

  useEffect(() => {
    // Create a new entry object with updated details
    const readEntry = { id, title, entry};
    // Fetch the diary entry by its ID
    axios
      .get(`http://localhost:4000/api/savedentries/` + id, diaryEntry)
      .then((response) => {
        setDiaryEntry(response.data); // Set the entry data in state
      })
      .catch((error) => {
        console.log("Error fetching the diary entry:", error);
      });
  }, [id]);

  if (!diaryEntry) {
    return <p>Loading diary entry...</p>; // Display while loading
  }

  

  return (
    <div>
      <h1>{diaryEntry.title}</h1>
      <p>{diaryEntry.entry}</p>
      <p><strong>Created At:</strong> {new Date(diaryEntry.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default Read;
