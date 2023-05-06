import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from "./images/logo.png"
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
                                className="block lg:hidden h-8 w-auto"
                                src={image}
                                alt="Workflow"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src={image}
                                alt="Workflow"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white bg-golden"
                                >Home</Link>
                                <Link to="/outsourcing"
                                className="px-3 py-2 rounded-md text-sm font-medium text-golden"
                                >Outsourcing(RPO)</Link>
                                <a
                                    href="#"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-golden"
                                >
                                    UK Healthcare Placement
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-golden"
                                >
                                    UK Education
                                </a>
                                <a
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium text-golden"
                        >
                            Visa & Immigration
                        </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-golden"
                        >
                            Home
                        </Link>
                        <Link
                            to="/outsourcing"
                            className="block px-3 py-2 rounded-md text-base font-medium text-golden"
                        >
                            Outsourcing(RPO)
                        </Link>
                        <a
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium text-golden"
                        >
                            UK Healthcare Placement
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium text-golden"
                        >
                            UK Education
                        </a>
                        <a
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium text-golden"
                        >
                            Visa & Immigration
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

