import React from 'react';
import bannerImg from '../../assets/imagenes/banner-img.jpg';
import '../../App.css';

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="banner-row">
        <div className="banner-col-left">
          <button className="banner-btn">FRONT END</button>
          <h1 className="banner-title">Challenge React</h1>
          <p className="banner-description">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación real.</p>
        </div>
        <div className="banner-col-right">
            <div className="banner-card">
              <img src="https://img.youtube.com/vi/-Ou5c3A225k/0.jpg" alt="banner imagen" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

