import "./ourapp.scss";
import "../../assets/scss/style.scss";

import googeplay from "../../assets/imgs/Google Play - eng.png";
import appstore from "../../assets/imgs/App Store - eng.png";
import phone from "../../assets/imgs/iPhone 15 Pro Black Titanium Mockup Portrait.png";

function OurApp() {
  return (
    <div className="our-app">
      <div className="left">
        <h2>Biz siz uchun</h2>
        <h1>Ilovamizdan foydalanib ko’ring!</h1>
        <p>Ilovamizni hoziroq yuklab oling va u orqali xizmatlarimizdan tez va oson foydalaning. </p>
        <div className="platforms">
          <a href="https://play.google.com/store/apps/details?id=io.hometasker.android" target="_blank"><img src={googeplay} alt="Google Play img" /></a>
          <a href="https://www.apple.com/lae/app-store/" target="_blank"><img src={appstore} alt="App Store img" /></a>
        </div>
      </div>
      <div className="right">
        <img src={phone} alt="iphone mockup img" />
      </div>
    </div>
  );
}

export default OurApp;