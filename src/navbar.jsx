import "./style/style.css";
import logo from "./img/logo-main.png";
import cookie from "./img/card-1logo.png";
import second from "./img/2-list-images.png";
import hamburger from "./img/hamburger-menu.png";
import pizza from "./img/pizza-menu.png";
import man from "./img/beard-man.png";
import one from "./img/main-img-galary.png";
import two from "./img/second-img-galary.png";
import three from "./img/third-img-galary.png";
import brMenu from "./img/banner-menu-img.png";
import chefOne from "./img/cooker-one.png";
import chefTwo from "./img/cooker-two.png";
import chefThree from "./img/cooker-three.png";
import footer from "./img/footer-img.png";

import React from "react";

const navbar = () => {
  return (
    <div className="wrapper">
      <div className="navbar">
        <div className="container">
          <div className="navbar-last">
            <div className="navbar-logo">
              <img src={logo} alt="" />
            </div>

            <div className="navbal-left">
              <div className="navbar-links">
                <a href="#">ГЛАВНАЯ</a>
                <a href="#">МЕНЮ</a>
                <a href="#">О НАС</a>
                <a href="#">БРОНЬ</a>
              </div>

              <div className="navbal-phone">
                <h1 className="phone">+999-888-76-54</h1>
                <div className="navbar-phone-content">
                  Свяжитесь с нами для бронирования
                </div>
              </div>

              <div className="navbar-button">ЗАКАЗ СТОЛИКА</div>
            </div>
          </div>

          <div className="banner-content">
            <h1>Добро пожаловать в</h1>
            <p className="banner-p">Наш ресторан</p>
            <span>----------ДОМ ЛУЧШЕЙ ЕДЫ----------</span>

            <div className="banner-button">VIEW MENU</div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="block-container">
          <div className="block">
            <img src={cookie} alt="" />
            <div className="block-content">
              <h1>
                Магическая <span>Атмосфера</span>{" "}
              </h1>
              <p>
                В нашем заведении царит <br /> магическая атмосфера <br />
                наполненная вкусными <br /> ароматами
              </p>
            </div>
          </div>
          <div className="block">
            <img src={cookie} alt="" />
            <div className="block-content">
              <h1>
                Магическая <span>Атмосфера</span>{" "}
              </h1>
              <p>
                В нашем заведении царит <br /> магическая атмосфера <br />
                наполненная вкусными <br /> ароматами
              </p>
            </div>
          </div>
          <div className="block">
            <img src={cookie} alt="" />
            <div className="block-content">
              <h1>
                Магическая <span>Атмосфера</span>{" "}
              </h1>
              <p>
                В нашем заведении царит <br /> магическая атмосфера <br />
                наполненная вкусными <br /> ароматами
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="second-section">
          <div className="main-content-block">
            <div className="main-content">
              <h1>
                Наша <span>История</span>
              </h1>
              <p>
                {" "}
                Как и у любого другого самобытного места, у нас есть своя,
                особая история. Идея ресторана пришла основателям неожиданно. Во
                время прогулки по лесу создатель нашего ресторана застрял в
                сотнях километров от ближайшего населенного пункта. Вдали от
                цивилизации и связи им пришлось навремя обустровать себе
                нехитрый быт, добывать и готовить себе еду.
              </p>
            </div>
            <div className="main-numbers">
              <div className="a">
                <p>93</p>
                <span>Напитки</span>
              </div>
              <div className="a">
                <p>206</p>
                <span>Еда</span>
              </div>
              <div className="a">
                <p>71</p>
                <span>Закуски</span>
              </div>
            </div>
          </div>

          <div className="main-content-image">
            <img src={second} alt="" />
          </div>
        </div>
      </div>

      <div className="block-main-center">
        <div className="container">
          <div className="content-center">
            <div className="center-block-content">
              <h1>
                Отпразднуйте в одном из <br /> самых лучших ресторанов.
              </h1>
              <p>Только в этом месяце бизнес-ланч от 250 ₽</p>
            </div>

            <div className="center-block-button">
              <button>ЗАКАЗ СТОЛИКА</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="block-menu">
          <h1>
            Наши <span>Блюда</span>
          </h1>
          <div className="menu-images">
            <div className="left">
              <img src={pizza} alt="" />
            </div>
            <div className="right">
              <img src={hamburger} alt="" />
              <img src={hamburger} alt="" />
              <img src={hamburger} alt="" />
            </div>

            <div className="block-images-content">
              <h1>Гамбургер мини---------------------220 ₽</h1>
              <h1>Гамбургер мини---------------------220 ₽</h1>
              <h1>Гамбургер мини---------------------220 ₽</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="restaraunt-menu">
        <div className="container">
          <div className="menu-blocks">
            <div className="menu-block">
              <img src={brMenu} alt="" />
              <div className="radial-block">420</div>
              <div className="menu-block-content">
                <h1>Гамбургер макси</h1>
                <p>
                  Максимально толстый <br /> слой мяса
                </p>
                <button>ЗАКАЗАТЬ</button>
              </div>
            </div>

            <div className="menu-block">
              <img src={brMenu} alt="" />
              <div className="radial-block">420</div>
              <div className="menu-block-content">
                <h1>Гамбургер макси</h1>
                <p>
                  Максимально толстый <br /> слой мяса
                </p>
                <button>ЗАКАЗАТЬ</button>
              </div>
            </div>

            <div className="menu-block">
              <img src={brMenu} alt="" />
              <div className="radial-block">420</div>
              <div className="menu-block-content">
                <h1>Гамбургер макси</h1>
                <p>
                  Максимально толстый <br /> слой мяса
                </p>
                <button>ЗАКАЗАТЬ</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="comments-block">
        <div className="container">
          <div className="comments">
            <p>
              Я надолго запомню мой День рождения, проведённый в этом ресторане!
              Кусочек родной <br /> Армении!!! Отдельное спасибо за комплепент в
              виде фруктовой тарелки. Будем <br /> рекомендовать этот ресторан
              своим друзьям и родственникам также за рубежом, <br />{" "}
              путешествующих в Санкт-Петербург!!!
            </p>

            <img src={man} alt="" />

            <h1>Посетитель</h1>
            <span>Николай</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="galary-section">
          <h1>
            Галерея <span>Блюд</span>
          </h1>
          <div className="galery">
            <div className="galary-images">
              <div className="galary-main">
                <img src={one} alt="" />
              </div>
              <div className="galary-footer">
                <img src={two} alt="" />
                <img src={three} alt="" />
              </div>
            </div>

            <div className="galary-images">
              <div
                className="galary-footer"
                style={{
                  margin: "0 0 5px 0",
                }}
              >
                <img src={two} alt="" />
                <img src={three} alt="" />
              </div>

              <div className="galary-main">
                <img src={one} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cookes">
          <h1>
            Наши <span>Повара</span>
          </h1>

          <div className="cookers-img">
            <img src={chefOne} alt="" />
            <img src={chefTwo} alt="" />
            <img src={chefThree} alt="" />
          </div>
        </div>
      </div>

      <div className="footer">
        <img src={footer} alt="" />
      </div>
    </div>
  );
};

export default navbar;
