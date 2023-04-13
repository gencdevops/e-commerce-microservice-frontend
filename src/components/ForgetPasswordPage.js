import React from 'react'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
        <h2>Şifremi Unuttum</h2>
        <form action="/home" class="max-w-lg w-4/12 rounded overflow-hidden shadow-lg">
          <div class="lg:flex lg:items-center mb-6">
            <div>
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                E-posta
              </label>
            </div>
            <div className="mx-1">
              <input
                class="shadow appearance-none border-2 bg-white border-gray-200 rounded 
                w-full py-2 px-4  leading-tight text-sm focus:outline-none"
                id="inline-full-name"
                type="text"
              />
            </div>
          </div>
          <div class="lg:flex lg:items-center mb-3 ">

              <button
                class="shadow bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded lg:ml-20 md:ml-10"
                type="button"
              >
                Mail Gönder
              </button>
          </div>
        </form>
        </div>
    )
}
