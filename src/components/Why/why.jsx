import "../../assets/scss/style.scss";
import "./why.scss";

import enjoyClean from "../../assets/imgs/enjoy-cleanliness.png";
import professional from "../../assets/imgs/professional.png";
import ProService from "../../assets/imgs/pro-service.png"

function Why() {
  return (
    <div className="why">
      <div className="top">
        <p className="why-p">Nima uchun</p>
        <h1>Bizni tanlashingiz shart</h1>
        <p className="why-ct">Xizmatlarimizdan foydalanishda quyidagi qulayliklarga va imkoniyatlarga ega
          bo’lasiz</p>
      </div>
      <div className="bottom">
        <div className="bx left">
          <img src={enjoyClean} alt="enjoy cleanliness img" />
          <h4>Tozalikdan rohatlanish</h4>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni
            taqdim etamiz.</p>
        </div>
        <div className="bx center">
          <img src={professional} alt="Professional img" />
          <h4>Professionallik</h4>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni
            taqdim etamiz.</p>
        </div>
        <div className="bx right">
          <img src={ProService} alt="pro service img" />
          <h4>Mutaxassislar xizmati</h4>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni
            taqdim etamiz.</p>
        </div>
      </div>
    </div>
  );
}

export default Why;