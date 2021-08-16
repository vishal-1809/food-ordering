import React from "react";

export default function Sign() {
  const sub = () => {
    let fn = document.getElementById("fname");
    let ln = document.getElementById("lname");
    let em = document.getElementById("email");
    let pa = document.getElementById("password");
    if (fn.value === "Sign In") {
      document.getElementById("fsign").style.display = "block";
      setTimeout(() => {
        document.getElementById("fsign").style.display = "none";
      }, 1500);
      fn.value = "";
      ln.value = "";
      em.value = "";
      pa.value = "";
    } else if (
      fn.value.length &&
      ln.value.length &&
      em.value.length &&
      pa.value.length
    ) {
      document.getElementById("logged_in").style.display = "block";
      setTimeout(() => {
        document.getElementById("logged_in").style.display = "none";
      }, 1000);
      document.getElementById("sign").innerText = `${fn.value}`;
      document.getElementById("whole").innerHTML = `
      <h1>You're Logged In ${fn.value}!</h1>
      `;
      document.getElementById("details").style.display = "none";
      document.getElementById("logout").style.display = "block";
      fn.value = "";
      ln.value = "";
      em.value = "";
      pa.value = "";
    } else {
      document.getElementById("improper").style.display = "block";
      setTimeout(() => {
        document.getElementById("improper").style.display = "none";
      }, 1000);
    }
  };

  return (
    <>
      <div className="fsign" id="fsign">
        <div className="fsignin">
          {" "}
          <strong>Please Choose Another First Name!</strong>
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

      <div className="logged_in" id="logged_in">
        <span>Succesfully Logged In!</span>
      </div>
      <div className="improper" id="improper">
        <span>Kindly fill Details Properly!</span>
      </div>
      <h1 className="details" id="details">
        Enter Details
      </h1>
      <div className="whole" id="whole">
        <div className="container">
          <div className="input">
            <label htmlFor="email">First Name : </label>
            <input
              type="text"
              className="fname"
              id="fname"
              placeholder="First Name"
            />
          </div>
          <div className="input">
            <label htmlFor="email">Last Name : </label>
            <input
              type="text"
              className="lname"
              id="lname"
              placeholder="Last Name"
            />
          </div>
          <div className="input">
            <label htmlFor="email">Enter your email : </label>
            <input
              type="email"
              className="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="input">
            <label htmlFor="pwd">Password : </label>
            <input type="password" id="password" name="pwd" />
          </div>
          <div className="submit">
            <button id="submit" onClick={() => sub()}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
