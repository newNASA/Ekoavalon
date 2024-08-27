import "./partners.scss";
import "../../assets/scss/style.scss";

import logo from "../../assets/imgs/LOGO.png";

function Partners() {
  return (
    <div className="hamkorlar">
      <div className="top">
        <p>Biz bilan ishlovchi</p>
        <h1>Hamkor kompaniyalar</h1>
      </div>
      <div className="slide-bottom">
        <div className="bottom">
          <div className="logo log1"><img src={logo} alt="LOGO" /></div>
          <div className="logo"><img src={logo} alt="LOGO" /></div>
          <div className="logo"><img src={logo} alt="LOGO" /></div>
          <div className="logo"><img src={logo} alt="LOGO" /></div>
          <div className="logo"><img src={logo} alt="LOGO" /></div>
          <div className="logo"><img src={logo} alt="LOGO" /></div>
        </div>
      </div>
    </div>
  );
}

export default Partners;