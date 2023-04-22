import logo from './logo.svg';
import './App.css';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
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
      
    </Routes>
    </Router>
  );
}

export default App;
