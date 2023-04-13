import React from 'react'
import { Link } from 'react-router-dom'

const paymentSuccess = () => (
    <section id="about" className="flex my-40 item-center justify-center">
        <div className="m-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" className="bi bi-bag-check-fill m-auto" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
            </svg>
            <p className="mt-5 text-xxl md:text-lg leading-loose">
                Payment Successfull!
            </p>
            <Link to="/" className="mt-5 btn-sm w-max mx-auto">Return to home</Link>
        </div>
</section>
)

export default paymentSuccess