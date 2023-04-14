import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9002/api/v1/";

class AuthService {

    login(username, password) {

        return axios
            .post(API_URL + "authenticate", {
                username,
                password,
            })
            .then(response => {
                debugger
                if (response.data.jwtToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {

    }

    register(userRegisterRequestDto) {
        return axios.post(API_URL + "users/register",
            userRegisterRequestDto
        );
    }

    resetPassword(password, uid, token) {
        return axios.post(API_URL + "users/reset-password",
            {password, uid, token}
        );
    }

    changePassword(currentPassword, newPassword) {
        return axios.put(API_URL + "users/change-password",{ currentPassword, newPassword},{headers: authHeader()}).then(
            (res)=>{
                console.log(res)},
            (err)=>{
                console.log(err)
            }
        )
    }

    forgotPassword(email) {
        return axios.get(API_URL + "users/forgot-password/" + email).then(
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
