import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationbar';
import DiaryEntry from './components/diaryentry';
import ViewDiary from './components/viewdiary';
import Edit from './components/edit';
import ReadEntry from './components/readentry';



function App() {
  return (
    <div className='appContainer'>
    <Router>
     <NavigationBar />
      <Routes>
        <Route path="/viewdiary" element={<ViewDiary/>} />
        <Route path="/create" element={<DiaryEntry/>} />
        <Route path="/edit/:id" element={<Edit />} /> 
        <Route path="/readentry/:id" element={<ReadEntry />} /> 
       
      </Routes>
      
    </Router>
    </div>
  );
}

export default App;
