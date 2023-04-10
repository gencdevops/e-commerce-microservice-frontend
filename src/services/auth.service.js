import axios from "axios";
import {StoreContext} from "../context";
import {useContext} from "react";

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

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();
