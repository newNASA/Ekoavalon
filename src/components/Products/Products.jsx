import "./Products.scss";

import Search from "../../assets/imgs/search-normal.png";
import clean from "../../assets/imgs/clean-ser.png";
import desinfeksiya from "../../assets/imgs/desinfeksiya-ser.png";
import washing from "../../assets/imgs/washing-ser.png";

import product1 from "../../assets/imgs/product1.jpg";
import product2 from "../../assets/imgs/product2.jpg";
import product3 from "../../assets/imgs/product3.jpg";
import product4 from "../../assets/imgs/product4.jpg";
import product5 from "../../assets/imgs/product5.jpg";
import product6 from "../../assets/imgs/product6.jpg";

function Services() {
  return (
    <div className="xizmatlar">
      <div className="top">
        <h2>Siz uchun</h2>
        <h1>Qanday mahsulotlar taklif qilamiz</h1>
        <p>Biz sizning uyingiz, ofisingiz tozaligi va farovonligi uchun quyidagi xizmatlarni taklif qilamiz</p>
      </div>
      <div className="center">
        <div className="left">
          <ul>
            <li data-filter="Barchasi">Barchasi</li>
            <li data-filter="Tozalash">Tozalash</li>
            <li data-filter="Dizinfeksiya">Dizinfeksiya</li>
            <li data-filter="Yuvish">Yuvish</li>
            <li data-filter="Oshxona">Oshxona</li>
            <li data-filter="Uy va ofis">Uy va ofis</li>
            <li data-filter="Bog' va yashil maydonlar">Bog' va yashil maydonlar</li>
          </ul>
          <select name="filter" id="filter">
            <option value="Barchasi">Barchasi</option>
            <option value="Tozalash">Tozalash</option>
            <option value="Dizinfeksiya">Dizinfeksiya</option>
            <option value="Yuvish">Yuvish</option>
            <option value="Oshxona">Oshxona</option>
            <option value="Uy va ofis">Uy va ofis</option>
            <option value="Bog' va yashil maydonlar">Bog' va yashil maydonlar</option>
          </select>
        </div>
        <div className="right">
          <img src={Search} alt="search img" />
          <input type="text" placeholder="Qidirish" className="xizmatlar-search" />
        </div>
      </div>
      <div className="xizmatlar-bottom">
        <div className="card" data-category="Tozalash"><img src={product1} alt="Uylarni tozalash" /><span>Tozalash</span>
          <h2>Uylarni tozalash</h2>
          <p>Narx: <b>10000</b></p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Dizinfeksiya"><img src={product2} alt="Ofislarni tozalash" /><span>Dizinfeksiya</span>
          <h2>Ofislarni tozalash</h2>
          <p>Narx: <b>10000</b></p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Yuvish"><img src={product3} alt="Bog'larni tozalash" /><span>Yuvish</span>
          <h2>Bog'larni tozalash</h2>
          <p>Narx: <b>10000</b></p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Oshxona"><img src={product4} alt="Yashil maydonlarni tozalash" /><span>Oshxona</span>
          <h2>Yashil maydonlarni tozalash</h2>
          <p>Narx: <b>10000</b></p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Uy va ofis"><img src={product5} alt="Qurilish joylarini tozalash" /><span>Uy va
          ofis</span>
          <h2>Qurilish joylarini tozalash</h2>
          <p>Narx: <b>10000</b></p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Bog' va yashil maydonlar"><img src={product6} alt="Umumiy tozalash" /><span>Bog' va yashil
          maydonlar</span>
          <h2>Umumiy tozalash</h2>
          <p>Narx: <b>10000</b></p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Bog' va yashil maydonlar"><img src={product1} alt="Mebellarni tozalash" /><span>Bog' va yashil
          maydonlar</span>
          <h2>Mebellarni tozalash</h2>
          <p>Narx: <b>10000</b></p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Bog' va yashil maydonlar"><img src={product2} alt="Mebellarni tozalash" /><span>Bog' va yashil
          maydonlar</span>
          <h2>Mebellarni tozalash</h2>
          <p>Narx: <b>10000</b></p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
      </div>
    </div>
  );
}

export default Services;