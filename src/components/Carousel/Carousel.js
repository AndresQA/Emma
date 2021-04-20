import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carusel = () => {

  const onChange = () => { }

  const onClickThumb = () => { }

  const onClickItem = () => { }

  return (
    <Carousel showArrows={true} autoPlay={true} showStatus={false}  onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} infiniteLoop={true} showThumbs={false}>
      <div>
        <img src="/images/carousel1.png" />
        <h2 className="legend">Este es el efecto de la migración de venezolanos a Colombia en precios y salarios</h2>
      </div>
      <div>
        <img src="/images/carousel1.png" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="/images/carousel1.png" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );

}


export default Carusel;
