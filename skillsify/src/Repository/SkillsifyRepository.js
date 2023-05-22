import axios from "../custom-axios/axios";

const AUTH_TOKEN = 'auth_token';
const loggedInEmail = 'email';

const skillsifyRepository = {

    register: (fullName, dateOfBirth, phoneNumber, address, email, password) => {
        return axios.post("/users/register", {
            "fullName": fullName,
            "dateOfBirth": dateOfBirth,
            "phoneNumber": phoneNumber,
            "address": address,
            "email": email,
            "password": password,
        }).then(resp => 'OK')
            .catch(res => res.response.data.message)
    },

    login: (email, password) => {
        return axios.post("/users/login", {
            "email": email,
            "password": password},).then(res => {
            localStorage.setItem(AUTH_TOKEN, res.data);
            localStorage.setItem(loggedInEmail, email);
            console.log(res.data);
            return res;

        }).catch(res => res.response.data.message);

    },

    checkIfUserLoggedIn: () => {
        return localStorage.getItem(AUTH_TOKEN) !== null;
    },
    getLoggedUser: () => {
        return axios.get(`/users/account-details/${localStorage.getItem(loggedInEmail)}`, );
    },
    logout: () => {
        localStorage.removeItem(AUTH_TOKEN);
        localStorage.removeItem(loggedInEmail);
    },
    getCourseById(id) {
        return axios.get(`/courses/${id}`, ).then((response) => {
            return response.data
        });
    },
    getCourses() {
        return axios.get('/courses', ).then((response) => {
            return response.data
        });
    }
}

export default skillsifyRepository;
