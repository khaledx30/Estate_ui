import { useState } from "react";
import "./navbar.scss";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span> Real Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Agents</a>
        <a href="/">Contact</a>
      </div>
      <div className="right">
        <a href="/">sign in</a>
        <a href="/" className="register">
          sign up
        </a>
        <div className="menuIcon">
          <img
            src="/public/menu.png"
            alt="mnue icon"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Agents</a>
          <a href="/">Contact</a>
          <a href="/">sign in</a>
          <a href="/">sign up</a>
        </div>
      </div>
    </nav>
  );
}
