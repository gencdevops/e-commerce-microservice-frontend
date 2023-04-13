import React, {useState} from 'react'
import { useAlert } from "react-alert";

export default function NewPasswordPage() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const alert = useAlert();

    function newPasswordChange(e) {setNewPassword(e.target.value)}
    function oldPasswordChange(e) {setOldPassword(e.target.value)}

    return (
        <div className="text-center m-5-auto mt-3">
          <h2>Şifre Değiştir</h2>
          <form  class="max-w-lg w-9/12 rounded overflow-hidden shadow-lg">      
            <div>
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="password"
                typeof='password'
              >
                Eski Şifreniz
              </label>
            </div>
            <div className="mx-1">
            <input 
                onChange={(e) => oldPasswordChange(e)}
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
                Yeni Şifreniz
              </label>
            </div>
            <div className="mx-1">
            <input 
                onChange={(e) => newPasswordChange(e)}
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
                    Yeni Şifreniz(Tekrar)
                </label>
              </div>
              <div className="mx-1">
              <input 
                onChange={(e) => newPasswordChange(e)}
                class="shadow appearance-none border-2 bg-white border-gray-200 rounded
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                id="password"
                type="password"
            />
              </div>
         
          <div class="lg:flex justify-center mb-3 mt-3">
            <div class="flex justify-center md:w-8/12  ml-1">
              <button 
                onClick={()=> alert.show('Şifreniz Değiştirildi')}
                class="w-8/12 shadow bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Şifreyi Değiştir
              </button>
            </div>
          </div>
        </form>
      </div>
    )

}

