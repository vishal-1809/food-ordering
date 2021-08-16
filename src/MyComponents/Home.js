import React from "react";
import menu from "./Menu";

export default function Home() {
  const order = (id) => {
    if (document.getElementById("sign").innerText === "Sign In") {
      document.getElementById("signIn").style.display = "block";
      setTimeout(() => {
        document.getElementById("signIn").style.display = "none";
      }, 1500);
    } else {
      document.getElementById("ordering").style.display = "block";
      setTimeout(() => {
        document.getElementById("ordering").style.display = "none";
      }, 1500);
    }
  };

  const addToCart = (id) => {
    if (document.getElementById("sign").innerText !== "Sign In") {
      let element = document.getElementById(id);
      if (element.style.fill === "red") {
        menu[id - 1].cart = "none";
        element.style.fill = "none";
      } else {
        element.style.fill = "red";
        menu[id - 1].cart = "red";
      }
    } else {
      order(id);
    }
  };

  return (
    <>
      <div className="content">
        {menu.map((menu, id) => (
          <div className="box" key={id}>
            <h2>{menu.name}</h2>
            <h3>{menu.desc}</h3>
            <div>
              <img src={menu.img} alt={menu.name} />
            </div>
            <div>Price : {menu.price}</div>
            <button id="order" onClick={() => order(menu.id)}>
              Order Now
            </button>
            <div></div>
            <span>
              <svg
                onClick={() => addToCart(menu.id)}
                id={menu.id}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hrt"
                fill={menu.cart}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
