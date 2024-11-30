import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationbar';
import DiaryEntry from './components/diaryentry';
import ViewDiary from './components/viewdiary';
import Content from './components/content';


function App() {
  return (
    <Router>
     <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<ViewDiary/>} />
        <Route path="/create" element={<DiaryEntry/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
