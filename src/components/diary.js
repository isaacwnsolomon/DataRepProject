// Importing MovieItem 
import DiaryItem from "./diaryitem";

//Define movies component which receives prop as an argument
const Diary = (props)=>{
    // using map method to iterate of myMovies
    return props.myDiary.map(
        
        (diary)=>{
            // Render DiaryItem component for each diary object
            return <DiaryItem myDiary={diary} key={diary._id} ReloadData={props.ReloadData}/>
        }
    );
}
// Export Movies
export default Diary;