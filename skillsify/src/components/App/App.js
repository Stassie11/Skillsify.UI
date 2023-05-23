import './App.css';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Home from '../Home/Home.js';
import CoursesList from '../Course/CoursesList.js';
import Course from '../Course/Course.js';
import Profile from '../Account/Profile.js';
import EnrollCourse from '../Course/EnrollCourse.js';
import { Routes, Route} from 'react-router-dom';
import {Component} from "react";
import skillsifyService from "../../Service/SkillsifyService";
import Header from "../Header/header";
import ReviewsList from "../Review/ReviewsList";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userLoggedIn: skillsifyService.checkIfUserLoggedIn(),
            userData: [],
        }
    }

    componentDidMount() {
        this.loadUser();
    }

    registerUser(fullName, dateOfBirth, phoneNumber, address, email, password){
        skillsifyService.register(fullName, dateOfBirth, phoneNumber, address, email, password).then(() => {
            window.location.href = "/login";
        })
    }
    loginUser(email, password){
        skillsifyService.login(email, password).then(() => {
            window.location.href = "/courses";
        })
    }

    logOutUser = () => {
        skillsifyService.logout();
        this.setState({
            userLoggedIn: false,
            userData: []
        })

        window.location.href = "/login";
    }
    loadUser = () => {
        if (skillsifyService.checkIfUserLoggedIn()) {
            skillsifyService.getLoggedUser().then((data) => {
                this.setState({
                    userData: data.data
                })
            });
        }
    }

    loadCourses = () => {
        return skillsifyService.getCourses();
    }
    render() {
        return (
            <div>
                <Header
                    isUserLoggedIn={this.state.userLoggedIn}
                    userData={this.state.userData}
                    logOutUser={this.logOutUser}
                />
                <div className="App bg-whitecustom">
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path='/login' element={<Login loginUser = {this.loginUser}/>}></Route>
                    <Route path='/register' element={<Register registerUser = {this.registerUser}/>}/>
                    <Route path='/courses' element={<CoursesList courses = {this.loadCourses}/>}/>
                    <Route path='/course/:id' element={<Course isUserLoggedIn={this.state.userLoggedIn}/>}/>
                    <Route path='/profile' element={<Profile userData = {this.state.userData}/>}></Route>
                    <Route path='/enroll-course' element={<EnrollCourse/>}></Route>
                    <Route path='/reviews' element={<ReviewsList/>}></Route>
                </Routes>
            </div>
        )
    }
}


export default App;
