import "./foryou.scss";
import "../../assets/scss/style.scss";

import product1 from "../../assets/imgs/product1.jpg";
import product2 from "../../assets/imgs/product2.jpg";
import product3 from "../../assets/imgs/product3.jpg";

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
          <img src={product1} alt="clean-service img" />
          <p className="title-p">Birinchi Tovar</p>
          <p className="content-p">Narx: <b>10000</b></p>
          <button><a href="./pages/info-xizmatlar.html">Batafsil</a></button>
        </div>
        <div className="card center">
          <img src={product2} alt="desinfeksiya-service img" />
          <p className="title-p">Ikkinchi Tovar</p>
          <p className="content-p">Narx: <b>10000</b></p>
          <button><a href="./pages/info-xizmatlar.html">Batafsil</a></button>
        </div>
        <div className="card right">
          <img src={product3} alt="washing-service img" />
          <p className="title-p">Uchinchi Tovar</p>
          <p className="content-p">Narx: <b>10000</b></p>
          <button><a href="./pages/info-xizmatlar.html">Batafsil</a></button>
        </div>
      </div>
    </div>
  )
}

export default ForYou;