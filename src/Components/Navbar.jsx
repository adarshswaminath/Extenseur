import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "./images/logo.png"
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-golden  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <img
                                className="block lg:hidden h-9 w-auto"
                                src={image}
                                alt="Workflow"
                            />
                            <img
                                className="hidden lg:block h-9 w-auto"
                                src={image}
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/" className="px-3 py-2 rounded-md text-lg text-golden font-medium border-b-2 border-r-2 border-golden hover:bg-golden hover:text-white"
                                >Home</Link>
                                <Link
                                    to="/about"
                                    className="block px-3 py-2 rounded-md text-lg font-medium hover:text-golden"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/visa&immigration"
                                    className="block px-3 py-2 rounded-md text-lg font-medium hover:text-golden"
                                >
                                    Visa & Immigration
                                </Link>
                                <Link to="/outsourcing"
                                    className="block px-3 py-2 rounded-md text-lg font-medium hover:text-golden"
                                >Outsourcing(RPO)</Link>

                                
                                <Link
                                    to="/news&updates"
                                    className="block px-3 py-2 rounded-md text-lg font-medium hover:text-golden"
                                >
                                    News & Updates
                                </Link>
                                <Link
                                    to="/contact"
                                    className="block px-3 py-2 rounded-md text-lg font-medium hover:text-golden"
                                >
                                    Contact Us
                                </Link>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Transition
                show={isMenuOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {isMenuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/* Mobile menu content */}
                            <Link
                                onClick={toggleMenu}
                                to="/"
                                className="block px-3 py-2 rounded-md text-base font-medium bg-golden"
                            >
                                Home
                            </Link>
                            <Link
                                onClick={toggleMenu}
                                to="/about"
                                className="block px-3 py-2 rounded-md text-base font-medium "
                            >
                                About Us
                            </Link>
                            <Link
                                onClick={toggleMenu}
                                to="/visa&immigration"
                                className="block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Visa & Immigration
                            </Link>
                            <Link
                                onClick={toggleMenu}
                                to="/outsourcing"
                                className="block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Outsourcing(RPO)
                            </Link>
                            
                           
                            <Link
                                onClick={toggleMenu}
                                to="/news&updates"
                                className="block px-3 py-2 rounded-md text-base font-medium "
                            >
                                News & Updates 
                            </Link>
                            <Link
                                onClick={toggleMenu}
                                to="/contact"
                                className="block px-3 py-2 rounded-md text-base font-medium "
                            >
                                Contact Us
                            </Link>
                            <Link
                                onClick={toggleMenu}
                                to="/user"
                                className="block px-3 py-2 rounded-md text-base font-medium "
                            >
                                Login/SignUp
                            </Link>
                            
                        </div>
                    </div>
                )}
            </Transition>

        </nav>
    );
}

export default Navbar;

