import "./footer.scss";
import "../../assets/scss/style.scss";

import logo from "../../assets/imgs/logo.svg"

function Footer() {
  return (
    <footer>
      <div className="foot-container">
        <h2>Biz uchun</h2>
        <h1>Yana savollaringiz bormi?</h1>
        <p>
          Sizni qiynayotgan savollaringiz bo’lsa biz bilan bog’laning! Mutaxassislarimiz sizning
          savollaringizgajavob berishadi!
        </p>
        <button className="contact">Buyurtma qilish</button>
      </div>
      <img src={logo} alt="log img" />
      <h1>Toza Makon</h1>
      <p className="tozalik">Tozalik biz bilan boshlanadi</p>
    </footer>

  );
}

export default Footer;