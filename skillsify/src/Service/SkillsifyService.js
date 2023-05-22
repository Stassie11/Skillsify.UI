import skillsifyRepository from '../Repository/SkillsifyRepository'

const skillsifyService = {

    register: (fullName, dateOfBirth, phoneNumber, address, email, password) => {
        return skillsifyRepository.register(fullName, dateOfBirth, phoneNumber, address, email, password);
    },

    login: (email, password) => {
        return skillsifyRepository.login(email, password);
    },
    checkIfUserLoggedIn: () => {
        return skillsifyRepository.checkIfUserLoggedIn();
    },

    getLoggedUser() {
        return skillsifyRepository.getLoggedUser();
    },
    logout: () => {
        return skillsifyRepository.logout();
    },
    getCourseById(id) {
        return skillsifyRepository.getCourseById(id);
    },
    getCourses() {
        return skillsifyRepository.getCourses();
    }
}
export default skillsifyService;
