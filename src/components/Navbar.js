import React, {useContext, useEffect, useState} from 'react'
import {Link, NavLink, useHistory, useLocation} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'
import {StoreContext} from '../context/index'
import '../app.css'
import AuthService from "../services/auth.service";
import jwtDecode from "jwt-decode";
import {useAlert} from "react-alert";
import RenderBasketList from './RenderBasketList'

const LoginButton = () => {

    let alert = useAlert();
    let history = useHistory();

    function logOut(){ setLogin(false)}
    function emailChange(e) {setEmail(e.target.value)}
    function passwordChange(e) {setPassword(e.target.value)}

    const {isLogin, setLogin} = useContext(StoreContext);
    const {showModal, setShowModal} = useContext(StoreContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    function signIn() {
        AuthService.login(email, password).then(
            () => {
                debugger
                const user = JSON.parse(localStorage.getItem('user'));
                localStorage.setItem("mail", jwtDecode(user.jwtToken).sub);
                setEmail(localStorage.getItem("mail"));
                setLogin(true);
                history.push("/");
                setShowModal(false)
            },
            err => {
                alert.show("Login hatası oluştu!")
            }
        )
    }
    return (
        <>  
        
                { 
                    isLogin ?
                    (
                        <>
                            <p className='md: text-sm'>{isLogin ? email : ""}</p>
                            <button className="flex text-2xl items-center lg:text-xl gap-3" onClick={()=> logOut()}>
                                <svg className="w-8 lg:w-7" stroke="#ef4444" fill="#ef4444" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M624 208H432c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                </svg>
                            </button>
                        </>
                    )
                    :
                    (
                        <>
                        <button onClick={() => setShowModal(true)} className="block text-2xl items-center lg:text-xl gap-3 sm:flex-row">
                            <svg className="w-8 lg:w-7" stroke="#ef4444" fill="#ef4444" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                            </svg>
                        </button>
                         </>
                    )
                }
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none background-modal">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none modal-login">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Giriş Yapınız</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <button type="button"
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>

                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24"
                                                 stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <form className="shadow-md rounded px-8 pt-6 pb-8 w-full">
                                            <div>
                                                <label
                                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="email"
                                                >
                                                    E-posta
                                                </label>
                                            </div>
                                            <div className="mx-1">
                                                <input onChange={(e) => emailChange(e)}
                                                       className="shadow appearance-none border-2 bg-white border-gray-200 rounded
                                                       w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                                                       id="email"
                                                       type="email"
                                                />
                                            </div>


                                            <div>
                                                <label
                                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                                    htmlFor="password"
                                                >
                                                    Parola
                                                </label>
                                            </div>
                                            <div className="mx-1">
                                                <input onChange={(e) => passwordChange(e)}
                                                       className="shadow appearance-none border-2 bg-white border-gray-200 rounded
                                                       w-full py-2 px-4  leading-tight text-sm focus:outline-none mb-2"
                                                       id="password"
                                                       type="password"
                                                />
                                            </div>
                                            <div className="lg:flex align-center mb-3 mt-3">
                                                <div className="flex justify-center md:w-6/12">
                                                    <button onClick={signIn}
                                                            className="w-8/12 shadow bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                                            type="button"
                                                    >
                                                        Giriş Yap
                                                    </button>
                                                </div>
                                                <div className="flex justify-center md:w-12/12 underline text-red-500 mt-2">
                                                   <Link onClick={() => setShowModal(false)} to="/register">Kayıt ol</Link>
                                                </div>
                                                <div className="flex justify-center md:w-6/12 underline text-red-500 mt-2">
                                                    <Link onClick={() => setShowModal(false)} to="/forgot-password">Şifremi Unuttum</Link>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
        </>
    )
}

const LogoutButton = () => {
    const { logout } = useAuth0();
  
    return (
      <button className="flex text-2xl items-center lg:text-xl gap-3 sm:flex-row" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
        <svg className="w-8 lg:w-7" stroke="#ef4444" fill="#ef4444" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M624 208H432c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
      </button>
    );
}


const CartButton = ({items}) => {
    const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return (
    <>
    <Link to="/cart" className="flex items-center gap-2 text-2xl lg:text-xl sm:flex-row">
        <div className="relative w-6">
            <div 
                className="absolute w-6 h-6 text-sm text-white bg-red-500 rounded-full top-0 right-0 flex justify-center items-center transform translate-x-4 -translate-y-4"
            >
                {items}
            </div>
            <HoverableDiv
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
            />
            {isHovering && <HoverText />}        
            </div>
    </Link>
    </>
    )
}

const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
    return (
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <svg stroke="#ef4444" fill="#ef4444" strokeWidth="5" viewBox="0 0 576 512"  xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
      </div>
    );
  };

  const HoverText = () => {
    return (
      <div style={{display:'flex', justifyContent:'center'}}>
        <RenderBasketList />
      </div>
    );
  };

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {isAuthenticated} = useAuth0()
    const [width, setWidth] = useState(window.innerWidth);
    const {productIds} = useContext(StoreContext)
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
                    <div className="flex row gap-6">
                        {
                            isAuthenticated ? <LogoutButton/> : <LoginButton/>
                        }
                        <CartButton items={productIds.length}/>
                    </div>
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
                    <div className="mt-10 flex gap-20 justify-center align-center row">
                            <CartButton items={productIds.length}/>
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
