import "./navbar.scss";

import call from "../../assets/imgs/call.png";
import arrow from "../../assets/imgs/arrow-left.png";
function NavTop() {
  return (
    <div className="nav-top">
      <div className="left">
        <img width="30px" src={call} alt="call img" />
        <p>77 57</p>
        <img src={arrow} alt="arrow img" className="arrow" />
        <p className="text">Xizmatlarimiz haqida bepul ma’lumot olish uchun qo'ng'iroq qiling!</p>
        <img src={arrow} alt="arrow img" className="arrow" />
        <p className="ish">Ish vaqti: 09:00 - 18:00</p>
      </div>
      <div className="right">
        <ul>
          <li><a href="https://www.youtube.com/channel/UCa70h5GSkNoVnnPKbvq12ww" target="_blank">YouTube</a>
          </li>
          <li><a href="https://t.me/homecleaning_az" target="_blank">Telegram</a></li>
          <li><a href="https://www.instagram.com/aziziy.me/   " target="_blank">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
}

export default NavTop;