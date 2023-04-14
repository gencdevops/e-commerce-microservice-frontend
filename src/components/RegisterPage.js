import React, {useContext, useState} from 'react'
import { useAlert } from "react-alert";
import AuthService from "../services/auth.service";
import { RegisterModel } from "../models/register-model";
import {StoreContext} from "../context";
import {useHistory} from "react-router-dom";

export default function SignUpPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const {showModal, setShowModal} = useContext(StoreContext)
    const alert = useAlert();
    const history = useHistory();

    function emailChange(e) {
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (regEx.test(e.target.value)) {
        console.log('başarılı') 
        setEmail(e.target.value)
      }
    }
    function firstNameChange(e) {setFirstName(e.target.value)}
    function lastNameChange(e) {setLastName(e.target.value)}
    function  passwordChange(e) {  setPassword(e.target.value) }
    function  birthDateChange(e) {setBirthDate(e.target.value)}
    function userNameChange(e) {setUserName(e.target.value)}
    function registerUser(){
       let userRegisterRequestDto = new RegisterModel(email,password,firstName,lastName,birthDate,userName);
        AuthService.register(userRegisterRequestDto).then(
            res=>{
                setShowModal(true)
                history.push("/")
                alert.show(res.data);

            },
            err=>{
                alert.show('Kayıt oluşturulamadı!')
            }
        );
    }

    return (
        <div className="text-center m-5-auto mt-3">
          <h2>Kayıt Ol</h2>
          <form  class="max-w-lg w-9/12 rounded overflow-hidden shadow-lg">      
            <div>
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="first-name"
              >
                Adınız
              </label>
            </div>
            <div className="mx-1">
              <input onChange={(e) => firstNameChange(e)}
                class="shadow appearance-none border-2 bg-white border-gray-200 rounded 
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                id="first-name"
                type="text"
              />
            </div>
            <div>
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="last-name"
              >
                Soyadınız
              </label>
            </div>
            <div className="mx-1">
              <input onChange={(e) => lastNameChange(e)}
                class="shadow appearance-none border-2 bg-white border-gray-200 rounded
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                id="last-name"
                type="text"
              />
            </div>
              <div>
                  <label
                      className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                      htmlFor="last-name"
                  >
                      Kullanıcı Adı
                  </label>
              </div>
              <div className="mx-1">
                  <input onChange={(e) => userNameChange(e)}
                         className="shadow appearance-none border-2 bg-white border-gray-200 rounded
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                         id="user-name"
                         type="text"
                  />
              </div>
              <div>
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="email"
              >
                E-posta
              </label>
            </div>
            <div className="mx-1">
              <input  
                onChange={(e) => emailChange(e)}
                class="shadow appearance-none border-2 bg-white border-gray-200 rounded 
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                id="email"
                type="email"
              />
            </div>
            <div>
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="birthDate"
              >
                Doğum tarihiniz
              </label>
            </div>
            <div className="mx-1">
              <input  
                onChange={(e) => birthDateChange(e)}
                className="shadow appearance-none border-2 bg-white border-gray-200 rounded 
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                id="birthDate"
                type="date"
              />
            </div>
            <div>
                <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="password"
                >
                    Şifreniz
                </label>
            </div>
            <div className="mx-1">
                <input 
                    onChange={(e) => passwordChange(e)}
                    className="shadow appearance-none border-2 bg-white border-gray-200 rounded
                    w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                    id="password"
                    type="password"
                />
            </div>
         
          <div class="lg:flex justify-center mb-3 mt-3">
            <div class="flex justify-center md:w-8/12  ml-1">
              <button 
                onClick={()=> registerUser()}
                class="w-8/12 shadow bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Kayıt Ol
              </button>
            </div>
          </div>
        </form>
      </div>
    )

}
