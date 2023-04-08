import React, {useContext, useState, useEffect} from 'react'
import { useLocation, NavLink, Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import {StoreContext} from '../context/index'

const LoginButton = () => {
    // const { loginWithRedirect } = useAuth0()
    return (<>
        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-2xl items-center lg:text-xl gap-3">
            Login
            <svg className="w-8 lg:w-7" stroke="#ef4444" fill="#ef4444" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
        </button>


<button data-modal-target="staticModal" data-modal-toggle="staticModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>


<div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
     
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>

            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
    
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="staticModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
</>

    )
}

const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button className="flex text-2xl items-center lg:text-xl gap-3" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
        <svg className="w-8 lg:w-7" stroke="#ef4444" fill="#ef4444" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M624 208H432c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
      </button>
    );
}

const CartButton = ({items}) => (
    <Link to="/cart" className="flex items-center gap-2 text-2xl lg:text-xl">
        <div className="relative w-6">
            <svg stroke="#ef4444" fill="#ef4444" strokeWidth="0" viewBox="0 0 576 512"  xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
            <div 
                className="absolute w-6 h-6 text-sm text-white bg-red-500 rounded-full top-0 right-0 flex justify-center items-center transform translate-x-4 -translate-y-4"
            >{items}</div>
        </div>
    </Link>
)

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isAuthenticated } = useAuth0()
    const { cart } = useContext(StoreContext)
    const [width, setWidth] = useState(window.innerWidth);
    const location = useLocation()

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    useEffect(() => {
        if(width > 768) setMobileMenuOpen(false);
    }, [width])

    useEffect(() => {
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location])


    const amount = cart.reduce((total, obj) => {
        total += obj.amount;
        return total;
    }, 0);

    return (
        <header>
            <div className="tw-container h-16 md:h-20 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 font-semibold text-blue-500">
                    <img className="mt-4" src="/fmss-logo.jpeg" alt="" width="150" />
                </Link>
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {
                            isAuthenticated &&
                            <li>
                                <NavLink to="/checkout">Checkout</NavLink>
                            </li>
                        }
                    </ul>
                </nav>
                <div>
                    <div className="hidden lg:flex gap-8">
                        <CartButton items={amount}/>
                        {
                            isAuthenticated ? <LogoutButton/> : <LoginButton/>
                        }
                    </div>
                    <button onClick={() => setMobileMenuOpen(true)} className="btn-lg lg:hidden border-0 bg-transparent text-blue-500">
                        <i className="fa-lg md:fa-2x fas fa-bars"></i>
                    </button>
                </div>
            </div>
            <div className={`z-20 fixed top-0 left-0 w-full h-screen bg-blue-500 px-5 py-8 transition-transform duration-500 ease-in-out transform  ${mobileMenuOpen ? '' : '-translate-x-full'}`}>
                <div className="w-full h-full text-blue-50">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center gap-2 font-semibold text-white">
                            <i className="fa-2x fas fa-couch"></i>
                            Digital Comfort
                        </Link>
                        <span onClick={() => setMobileMenuOpen(false)} className="cursor-pointer text-3xl font-semibold">X</span>
                    </div>
                    <ul className="mt-7 flex flex-col gap-7 text-xl">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                        {
                            isAuthenticated &&
                            <li>
                                <NavLink to="/checkout">Checkout</NavLink>
                            </li>
                        }
                    </ul>
                    <div className="mt-10 flex gap-8 justify-center">
                            <CartButton items={amount}/>
                            {
                                isAuthenticated ? <LogoutButton/> : <LoginButton/>
                            }
                    </div>
                </div>
            </div>
        </header>
    );
  }
  
  export default Navbar;