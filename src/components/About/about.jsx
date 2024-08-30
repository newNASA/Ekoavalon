import "./about.scss";
import "../../assets/scss/style.scss"; 

import arrowRight from "../../assets/imgs/arrow-right.svg"

function About() {
  return (
    <div className="about xizmatlar-2">
      <div className="b1">
        <div className="menu-x">
          <a className="a1" href="../index.html">Bosh sahifa</a>
          <img src={arrowRight} alt />
          <a href="about.html">Biz haqimizda</a>
        </div>
        <div className="menu-w">
          <div className="sizuchun">Toza Makon</div>
          <h1 className="siz-2">Biz haqimizda</h1>
          <div className="siz-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            blanditiis rerum iste nihil et? Pariatur sint laudantium modi
            dolorem ducimus rerum error optio tenetur esse atque cum ipsam quasi
            est eum tempore obcaecati similique odio vel ut reiciendis possimus
            quibusdam, repellat iure. Quam alias fuga accusamus nihil explicabo
            nostrum tempore quae dolorum illum, natus laboriosam itaque ea
            quibusdam quod eius facilis temporibus ut dolorem quidem
            repellendus? Fugit dignissimos dolor dolorum reiciendis. Impedit
            ducimus ex nulla, repellendus qui eum corporis laudantium provident,
            magnam, aliquam molestias facere libero tenetur eos nam officia
            cumque? Quisquam vitae laudantium distinctio accusamus ipsam rem
            nihil laboriosam?
          </div>
        </div>
        <div className="infos">
          <div>
            <p>Mijozlarimiz</p>
            <h2>2000+</h2>
          </div>
          <div>
            <p>Ish Tajribamiz</p>
            <h2>10 yil</h2>
          </div>
          <div>
            <p>Ishchilar</p>
            <h2>500+</h2>
          </div>
        </div>
      </div>
      {/* info-xizmatlar bo'limi asosiy video */}
      <div className="b2">
        <div className="video-youtube">
          <iframe width={974} height={715} src="https://www.youtube.com/embed/GkTrrDJ9wZE" title="OFFICE CLEANING TRAINING VIDEO" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>

  );
}

export default About;