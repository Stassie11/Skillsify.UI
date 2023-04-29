import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import CoursesList from './pages/CoursesList.js'
import Course from './pages/Course.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App bg-whitecustom">
    
    </div>
    <Routes>
    
      <Route path='' element={<Home/>}></Route>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/allcourses' element={<CoursesList/>}/>
      <Route path='/course/:id' element={<Course/>}/>
      
    </Routes>
    </Router>
  );
}

export default App;
