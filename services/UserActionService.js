import users from "../database/users.json";

// todo: we need to figure out a way to set the login action to false

class UserActionService{
    getAllUsers() {
        const localStore = localStorage.getItem('user_details');

        if (!localStore) {
            localStorage.setItem('user_details', JSON.stringify(users));
        }

        return JSON.parse(localStorage.getItem('user_details'));
    }

    successLogin(){
        localStorage.setItem('login_success', 'true');
    }

    isUserAuthenticated() {
        return localStorage.getItem('login_success');
    }

    Logout(){
        localStorage.setItem('login_success', 'false');
    }
}

export default UserActionService;

