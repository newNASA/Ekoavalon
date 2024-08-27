import "./customers.scss";
import "../../assets/scss/style.scss";

import quota from "../../assets/imgs/quato-img.png";
import profile from "../../assets/imgs/profile-img.png";
import stars from "../../assets/imgs/stars.png";

function Customers() {
  return (
    <div className="mijozlarNimaDeydi">
      <div className="top">
        <p>Biz haqimizda</p>
        <h1>Mijozlar nima deydi</h1>
      </div>
      <div className="bottom">
        <div className="qt quato1">
          <img className="q-img" src={quota} alt="quato-img" width="32px" />
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p>
          <div className="profile">
            <img className="im1" src={profile} alt="profile-img" />
            <p>John Doe</p>
            <img src={stars} alt="stars" />
          </div>
        </div>
        <div className="qt quato2">
          <img className="q-img" src={quota} alt="quato-img" width="32px" />
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p>
          <div className="profile">
            <img className="im1" src={profile} alt="profile-img" />
            <p>John Doe</p>
            <img src={stars} alt="stars" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Customers;