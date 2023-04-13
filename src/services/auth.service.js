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

    forgotPassword(email) {
        return axios.get(API_URL + "user/forgot-password/" + email).then(
            (res)=>{
                console.log(res)},
            (err)=>{
                console.log(err)
            }
        )
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();
