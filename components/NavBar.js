// NavBar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from "next-auth/react"

const NavBar = () => {
    const { data: session } = useSession()
    const status = session?.status;
    const isAdmin = true;
    const userName = session?.user.name;
    const userEmail = session?.user.email;
    let user = userName || userEmail;

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fixed w-full z-50'>

            <nav className="relative bg-white shadow  w-full">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link href="/" passHref>

                            <h3 className=' text-2xl text-orange-600  font-pm font-bold'>ST PIZZA</h3>

                        </Link>


                        <div className='flex gap-3'>
                            <div className='  flex justify-center items-center md:hidden'>

                                <Link href="#" passHref>
                                    <span className="relative text-gray-700 transition-colors duration-300 transform  hover:text-gray-600 dark:hover:text-gray-300">
                                        <svg
                                            className="w-7 h-7"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-orange-600 rounded-full"></span>
                                    </span>
                                </Link>
                            </div>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                                    aria-label="toggle menu"
                                >
                                    {!isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 8h16M4 16h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </div>

                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row md:mx-6 font-medium">
                            <Link href="/" >
                                <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                    Home
                                </span>
                            </Link>
                            <Link href="/menu" passHref>
                                <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                    Menu
                                </span>
                            </Link>
                            <Link href="/contact" passHref>
                                <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                    Contact
                                </span>
                            </Link>
                            <Link href="/about" passHref>
                                <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                    About
                                </span>
                            </Link>
                            {!session ? (
                                <></>) : (
                                <>
                                    <Link href="/profile" passHref>
                                        <span className="my-2 text-gray-700 transition-colors duration-300 transform  hover:text-orange-600 dark:hover:text-orange-600 md:mx-4 md:my-0">
                                            Profile
                                        </span>
                                    </Link>
                                    {isAdmin && (
                                            <>
                                    <Link href="/admin/menu-items/add" passHref>
                                        <span className="my-2 text-white transition-colors duration-300 transform  hover:bg-emerald-300  md:mx-4 md:my-0  bg-emerald-600 rounded-md px-4 py-1">
                                            Admin
                                        </span>
                                    </Link>
                                    </>)}
                                </>)}


                        </div>

                        <div className="flex justify-center  gap-3  ">
                            {!session ? (
                                <>


                                    <div className='  flex gap-4'>
                                        <Link href={"/login"}>
                                            <button className="  rounded-3xl bg-orange-600 text-white font-medium py-2 px-6  transition-all hover:bg-orange-400 active:scale-95">
                                                Login
                                            </button>
                                        </Link>
                                        <Link href={"/register"}>
                                            <button className="  rounded-3xl  border-2 text-gray-500 font-medium py-2 px-6  transition-all hover:bg-gray-100 active:scale-95">
                                                Register
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>

                                    <div className=' ml-5 flex gap-4 justify-center items-center'>
                                        <p className=' text-slate-600 '>Hello, {user}</p>
                                        <button className="  rounded-3xl bg-orange-600 text-white font-medium py-2 px-6  transition-all hover:bg-orange-400 active:scale-95" onClick={() => { signOut() }}>
                                            Log out
                                        </button>

                                        <div className='  flex justify-center items-center '>

<Link href="/cart" passHref>
    <span className="relative text-gray-700 transition-colors duration-300 transform  hover:text-gray-600 dark:hover:text-gray-300">
        <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>

        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-orange-600 rounded-full"></span>
    </span>
</Link>
</div>
                                    </div>

                                </>
                            )}
                        </div>


                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;
