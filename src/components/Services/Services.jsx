import "./services.scss";

import Search from "../../assets/imgs/search-normal.png";
import clean from "../../assets/imgs/clean-ser.png";
import desinfeksiya from "../../assets/imgs/desinfeksiya-ser.png";
import washing from "../../assets/imgs/washing-ser.png";

function Services() {
  return (
    <div className="xizmatlar">
      <div className="top">
        <h2>Siz uchun</h2>
        <h1>Qanday tozalash xizmatlar taklif qilamiz</h1>
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
        <div className="card" data-category="Tozalash"><img src={clean} alt="Uylarni tozalash" /><span>Tozalash</span>
          <h2>Uylarni tozalash</h2>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Dizinfeksiya"><img src={desinfeksiya} alt="Ofislarni tozalash" /><span>Dizinfeksiya</span>
          <h2>Ofislarni tozalash</h2>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Yuvish"><img src={desinfeksiya} alt="Bog'larni tozalash" /><span>Yuvish</span>
          <h2>Bog'larni tozalash</h2>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Oshxona"><img src={washing} alt="Yashil maydonlarni tozalash" /><span>Oshxona</span>
          <h2>Yashil maydonlarni tozalash</h2>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Uy va ofis"><img src={clean} alt="Qurilish joylarini tozalash" /><span>Uy va
          ofis</span>
          <h2>Qurilish joylarini tozalash</h2>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Bog' va yashil maydonlar"><img src={desinfeksiya} alt="Umumiy tozalash" /><span>Bog' va yashil
          maydonlar</span>
          <h2>Umumiy tozalash</h2>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Bog' va yashil maydonlar"><img src={desinfeksiya} alt="Mebellarni tozalash" /><span>Bog' va yashil
          maydonlar</span>
          <h2>Mebellarni tozalash</h2>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
        <div className="card" data-category="Bog' va yashil maydonlar"><img src={desinfeksiya} alt="Mebellarni tozalash" /><span>Bog' va yashil
          maydonlar</span>
          <h2>Mebellarni tozalash</h2>
          <p>Biz sizning uyingiz va ofisingiz tozaligi va farovonligi uchun keng ko'lamli xizmatlarni taqdim
            etamiz.</p><a href="/pages/info-xizmatlar.html">Batafsil</a>
        </div>
      </div>
    </div>
  );
}

export default Services;