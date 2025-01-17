// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";
import "../../assets/scss/style.scss";
import logo from "../../assets/imgs/logo.svg";
import sun from "../../assets/imgs/sun.svg";
import profile from "../../assets/imgs/profile.svg";
import hamburger from "../../assets/imgs/icons8-hamburger-menu-24.svg";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const [theme, setTheme] = useState(() => {
    // LocalStorage'dan saqlangan temani o'qing yoki qurilma temasi asosida aniqlang
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    } else {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return userPrefersDark ? 'dark' : 'light';
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const navTop = document.querySelector(".nav-top");
      if (navTop) {
        if (window.scrollY > navTop.clientHeight) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Tanlangan temani `data-theme` atributiga qo'llang va saqlang
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  const toggleTheme = () => {
    // Temani almashtirish
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <div className="navf" style={{ display: isFixed ? "flex" : "none" }} />
      <nav style={{
        position: isFixed ? 'fixed' : 'static',
        top: isFixed ? '0' : 'auto'
      }}>
        <Link to="/">
          <div className="left">
            <img src={logo} alt="logo img" />
            <h1>EkoAvalon</h1>
          </div>
        </Link>
        <div className="center">
          <Link to="/">Asosiy sahifa</Link>
          <Link to="/services">Xizmatlar</Link>
          <Link to="/about">Biz haqimizda</Link>
        </div>
        <div className="right">
          <button className="toggle-theme" onClick={toggleTheme}>
            <img src={sun} alt="Sun img" />
          </button>
          <button className="profile">
            <img src={profile} alt="profile img" />
          </button>
          <button className="gamburger">
            <img src={hamburger} alt="gamburger img" />
          </button>
          {/* <a href="https://play.google.com/store/apps/details?id=io.hometasker.android" target="_blank" className="ilova" rel="noreferrer">Ilovamizni sinab ko'ring</a> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
