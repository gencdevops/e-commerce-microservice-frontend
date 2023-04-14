import React, {useContext, useState} from "react";

import ".././app.css";
import AuthService from "../services/auth.service";
import {useHistory, useParams} from "react-router-dom";
import {StoreContext} from "../context";

export default function ChangePassword() {

    const [pass, setPass] = useState("");
    const [rePass, setRePass] = useState("");
    const {showModal, setShowModal} = useContext(StoreContext)
    const history = useHistory();
    function changePassword(e) {
      setPass(e.target.value)
    }

    function sendChangePassword() {
        AuthService.changePassword(pass,rePass).then(
            res=>{

               history.push("/")
                setShowModal(true)
            },
            err=>{
                console.log(err)
            }
        )
    }

    function changeRepassword(e) {
        setRePass(e.target.value)
    }

    return (
    <div className="text-center m-5-auto">
    <h2>Şifre Yenileme</h2>
    <form class="max-w-lg w-4/12 rounded overflow-hidden shadow-lg">
  
        <div>
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="password"
          >
              Eski Parola
          </label>
        </div>
        <div className="mx-1">
          <input onChange={(e) => changePassword(e)}
            class="shadow appearance-none border-2 bg-white border-gray-200 rounded 
            w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
            id="password"
            type="password"
          />
        </div>
        <div>
            <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="password"
            >
                Yeni Parola
            </label>
        </div>
        <div className="mx-1">
            <input onChange={(e) => changeRepassword(e)}
                   className="shadow appearance-none border-2 bg-white border-gray-200 rounded
            w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                   id="password"
                   type="password"
            />
        </div>

      <div class="lg:flex mb-3">
        <div class="md:w-8/12 text-left ml-1">
          <button onClick={()=> sendChangePassword()}
            class="w-8/12 shadow bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
              Gönder
          </button>
        </div>
      </div>
    </form>
  </div>
  );
}
