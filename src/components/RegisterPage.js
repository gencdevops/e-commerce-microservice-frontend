import React from 'react'


export default function SignUpPage() {

    return (
        <div className="text-center m-5-auto">
        <h2>Kayıt Ol</h2>
        <form action="/home" class="max-w-lg w-4/12 rounded overflow-hidden shadow-lg">
      
            <div>
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="first-name"
              >
                Adınız
              </label>
            </div>
            <div className="mx-1">
              <input
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
              <input
                class="shadow appearance-none border-2 bg-white border-gray-200 rounded
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                id="last-name"
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
                class="shadow appearance-none border-2 bg-white border-gray-200 rounded 
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                id="email"
                type="email"
              />
            </div>

          
            <div>
              <label
                class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="date-of-birth"
              >
                Doğum tarihiniz
              </label>
            </div>
            <div className="mx-1">
              <input
                class="shadow appearance-none border-2 bg-white border-gray-200 rounded 
                w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                id="date-of-birth"
                type="date"
              />
            </div>
         
          <div class="lg:flex mb-3">
            <div class="md:w-8/12 text-left ml-1">
              <button
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
