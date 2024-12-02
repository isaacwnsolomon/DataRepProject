import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationbar';
import DiaryEntry from './components/diaryentry';
import ViewDiary from './components/viewdiary';
import Content from './components/content';
import Edit from './components/edit';


function App() {
  return (
    <Router>
     <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/viewdiary" element={<ViewDiary/>} />
        <Route path="/create" element={<DiaryEntry/>} />
        <Route path="/edit/:id" element={<Edit />} /> 
      </Routes>
      
    </Router>
  );
}

export default App;
