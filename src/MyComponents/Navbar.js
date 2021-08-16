import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const log = () => {
    document.getElementById("sign").innerText = "Sign In";
    document.getElementById("logout").style.display = "none";
  };

  return (
    <>
      <header className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/breakfast">Breakfast</Link>
          </li>
          <li>
            <Link to="/lunch">Lunch</Link>
          </li>
          <li>
            <Link to="/dinner">Dinner</Link>
          </li>
          {/* <li><Link to="/others">Others</Link></li> */}
          <li>
            <Link to="/cart">Carts</Link>
          </li>
          <li>
            <Link to="/sign" id="sign">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/" id="logout" className="logout" onClick={() => log()}>
              Logout
            </Link>
          </li>
        </ul>
      </header>

      <div className="nosign" id="signIn">
        <div className="signIn">
          {" "}
          <strong>Please Sign In!</strong>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 emoji"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="ordering" id="ordering">
        <div className="ord">
          {" "}
          <strong>This is Just a Front End!</strong>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 emoji"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
