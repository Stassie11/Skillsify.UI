import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import CoursesList from './pages/CoursesList.js'
import Course from './pages/Course.js'
import Profile from './pages/Profile.js'
import StartCourse from './pages/StartCourse.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App bg-whitecustom">
    
    </div>
    <Routes>
    
      <Route path='/home' element={<Home/>}></Route>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/allcourses' element={<CoursesList/>}/>
      <Route path='/course/:id' element={<Course/>}/>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/startCourse' element={<StartCourse/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
