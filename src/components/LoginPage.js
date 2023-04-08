import React from "react";
import { Link } from "react-router-dom";

import ".././app.css";

export default function SignInPage() {
  return (
    <div className="text-center m-5-auto">
    <h2>Giriş Yap</h2>
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
            class="shadow appearance-none border-2 bg-white border-gray-200 rounded
            w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
            id="password"
            type="password"
          />
        </div>  
      <div class="lg:flex mb-3">
        <div class="md:w-8/12 text-left ml-1">
          <button
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
