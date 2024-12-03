// Importing DiaryItem 
import DiaryItem from "./diaryitem";

//Define diary component which receives prop as an argument
const Diary = (props)=>{
    // using map method to iterate of myDiary
    return props.myDiary.map(
        
        (diary)=>{
            // Render DiaryItem component for each diary object
            return <DiaryItem myDiary={diary} key={diary._id} ReloadData={props.ReloadData}/>
        }
    );
}
// Export Diary
export default Diary;