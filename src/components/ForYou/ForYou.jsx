import "./foryou.scss";
import "../../assets/scss/style.scss";

import clean from "../../assets/imgs/clean-ser.png";
import desinfeksiya from "../../assets/imgs/desinfeksiya-ser.png";
import washing from "../../assets/imgs/washing-ser.png";

function ForYou() {
  return (
    <div className="forYou">
      <div className="top">
        <h2>Biz siz uchun</h2>
        <h1>Nimalarni taklif qilamiz</h1>
        <p className="yourHouse-p">Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun quyidagi xizmatlarni
          taklif qilamiz
        </p>
      </div>
      <div className="bottom">
        <div className="card left">
          <img src={clean} alt="clean-service img" />
          <p className="title-p">Tozalash xizmatlari</p>
          <p className="content-p">Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli
            xizmatlarni taqdim etamiz.</p>
          <button><a href="./pages/info-xizmatlar.html">Batafsil</a></button>
        </div>
        <div className="card center">
          <img src={desinfeksiya} alt="desinfeksiya-service img" />
          <p className="title-p">Dizinfeksiya xizmatlari</p>
          <p className="content-p">Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli
            xizmatlarni taqdim etamiz.</p>
          <button><a href="./pages/info-xizmatlar.html">Batafsil</a></button>
        </div>
        <div className="card right">
          <img src={washing} alt="washing-service img" />
          <p className="title-p">Yuvish xizmatlari</p>
          <p className="content-p">Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli
            xizmatlarni taqdim etamiz.</p>
          <button><a href="./pages/info-xizmatlar.html">Batafsil</a></button>
        </div>
      </div>
    </div>

  );
}

export default ForYou;