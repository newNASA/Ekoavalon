
import "./navbar.scss";
import "../../assets/scss/style.scss"


import logo from "../../assets/imgs/logo.svg";
import sun from "../../assets/imgs/sun.svg";
import profile from "../../assets/imgs/profile.svg";
import hamburger from "../../assets/imgs/icons8-hamburger-menu-24.svg";

function Navbar() {
  return (
    <div>
      <div className="navf" />
      <nav>
        <a href="#">
          <div className="left">
            <img src={logo} alt="logo img" />
            <h1>Toza Makon</h1>
          </div>
        </a>
        <div className="center">
          <a href="./pages/xizmatlar.html">Xizmatlar</a>
          <a href="/pages/blog.html">Blog</a>
          <a href="/pages/about.html">Biz haqimizda</a>
        </div>
        <div className="right">
          <button className="toggle-theme">
            <img src={sun} alt="Sun img" />
          </button>
          <button className="profile">
            <img src={profile} alt="profile img" />
          </button>
          <button className="gamburger">
            <img src={hamburger} alt="gamburger img" />
          </button>
          <a href="https://play.google.com/store/apps/details?id=io.hometasker.android" target="_blank" className="ilova">Ilovamizni sinab ko’ring</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;