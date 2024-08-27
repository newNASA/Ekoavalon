import "../../assets/scss/style.scss";
import "./header.scss";

import HeaderBg from "../../assets/imgs/header-bg.png";

function Header() {
  return (
    <div>
      <div className="head-body">
        <div className="head-left">
          <h2>Biz siz uchun</h2>
          <h1>Toza va sog’lom muhit yaratamiz</h1>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p>
          <div className="btns">
            <button className="contact">Bog’lanish</button>
            <a href="./pages/xizmatlar.html">Bizning xizmatlar</a>
          </div>
        </div>
        <div className="head-right">
          <img src={HeaderBg} alt />
        </div>
      </div>
    </div>
  );
}

export default Header;