import React, {useContext, useState} from "react";
import ".././app.css";
import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {StoreContext} from "../context";

export default function SignInPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
    let history = useHistory()
    const {login, setLogin} = useContext(StoreContext)
   function emailChange(e){
    setEmail(e.target.value)
    }

    function passwordChange(e){
        setPassword(e.target.value)
    }

    function signIn(){
        AuthService.login(email, password).then(
            res =>{
                debugger
                const user = JSON.parse(localStorage.getItem('user'));
                localStorage.setItem("mail", jwtDecode(user.jwtToken).sub);
                setEmail(localStorage.getItem("mail"));
                setLogin(true);
                history.push("/products")
            },
            err=>{
                console.log(err)
                alert("hata")
            }
        )
    }

  return (
    <div className="text-center m-5-auto">
    <h2>Giriş Yapınız</h2>
    <form action="/home" class="max-w-lg w-4/12 rounded overflow-hidden shadow-lg">
        <div>
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="first-name"
          >
            E-posta
          </label>
        </div>
        <div className="mx-1">
          <input 
            onChange={(e) => emailChange(e)}
            class="shadow appearance-none border-2 bg-white border-gray-200 rounded 
            w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
            id="first-name"
            type="email"
          />
        </div>
        <div>
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="password"
          >
            Parola
          </label>
        </div>
        <div className="mx-1">
          <input 
            onChange={(e) => passwordChange(e)}
            class="shadow appearance-none border-2 bg-white border-gray-200 rounded
            w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
            id="password"
            type="password"
          />
        </div>  
      <div class="lg:flex mb-3">
        <div class="md:w-8/12 text-left ml-1">
          <button 
            onClick={signIn}
            class="w-8/12 shadow bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </form>
  </div>
  );
}
