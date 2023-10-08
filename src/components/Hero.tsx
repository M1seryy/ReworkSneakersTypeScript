import logoText from "../images/img/text.png";
import logoSlider from "../images/img/logo-slider.png";

const Hero = () => {
  return (
      <section className="hero">
        <div className="container">
          <div className="hero_section">
            <div className="hero__slider">
              <div className="text__side">
                <img src={logoSlider} alt="logo" />
                <img className="logo-text" src={logoText} alt="text" />
                <button className="btn__slider_buy">Order</button>
              </div>
              <div className="bg__side"></div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
