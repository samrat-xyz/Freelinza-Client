import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user,logoutUser } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-jobs">All Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/my-jobs">Add a Job</NavLink>
      </li>
      <li>
        <NavLink>My Accepted Tasks</NavLink>
      </li>
    </>
  );
  const handleLogout = () =>{
    logoutUser()
  }
  return (
    <div className=" md:px-3 py-2 bg-base-200 shadow-md ">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm bg-base-300 dropdown-content rounded-box mt-3 w-52 p-2 shadow text-2xl "
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl md:text-3xl font-semibold  tracking-wide"
          >
            Freelinza
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="user"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/signin" className="btn btn-style ">
                Sign in
              </Link>
              <Link to="/login" className="btn btn-style">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
