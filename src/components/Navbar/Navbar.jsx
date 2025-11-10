import React, { useEffect, useState, use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logoutUser } = use(AuthContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const current = savedTheme || document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current);
    document.documentElement.setAttribute("data-theme", current);
  }, []);

  const handleThemeToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link-active" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-jobs" className={({ isActive }) => (isActive ? "nav-link-active" : "")}>
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-jobs" className={({ isActive }) => (isActive ? "nav-link-active" : "")}>
          Add A Job
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-added-jobs" className={({ isActive }) => (isActive ? "nav-link-active" : "")}>
          My Added Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-accepted-tasks" className={({ isActive }) => (isActive ? "nav-link-active" : "")}>
          My Accepted Tasks
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="md:px-3 py-2 bg-base-200 shadow-md">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm bg-base-300 dropdown-content rounded-box mt-3 w-52 p-2 shadow text-2xl">
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl md:text-3xl font-semibold tracking-wide">
            Freelinza
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="user" src={user?.photoURL} />
                </div>
              </div>
              <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>

               
                <div className="flex items-center justify-between px-2 my-2">
                  <p className="text-xs">Change Theme</p>
                  <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={handleThemeToggle}
                    className="toggle toggle-xs"
                  />
                </div>

                <button onClick={handleLogout} className="py-1 rounded-full btn-style">
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/signin" className="btn btn-style">
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
