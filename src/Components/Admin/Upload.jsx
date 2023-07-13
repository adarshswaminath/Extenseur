import React from "react";
import Header from "./Header";
import { Link, Route, Routes } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";

function Upload() {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {/* header section */}
          <div className="navbar bg-golden">
            <div className="flex-1">
              <label htmlFor="my-drawer" className="drawer-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm bg-base-200 text-black dropdown-content rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* header section close */}
          {/* page content  */}
          <Form/>
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <h2 className="text-4xl font-semibold mt-6 mb-6">Dashboard</h2>
            <li>
              <Link to="/pannel" className="text-2xl font-serif">
                Home
              </Link>
            </li>
            <li>
              <Link to="/upload" className="text-2xl font-serif">
                File Upload
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Upload;
