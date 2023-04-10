import axios from "axios";

const API_URL = "http://localhost:9002/";

class AuthService {

    login(username, password) {

        return axios
            .post(API_URL + "authenticate", {
                username,
                password,
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {

    }

    register(userRegisterRequestDto) {
        return axios.post(API_URL + "user/register",
            userRegisterRequestDto
        );
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
