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
        <p className="legend">Este es el efecto de la migración de venezolanos a Colombia en precios y salarios</p>
      </div>
      <div>
        <img src="/images/carousel2.png" />
        <p className="legend">Migración venezolana puede disminuir salarios y bajar la inflación en Colombia</p>
      </div>
      <div>
        <img src="/images/carousel3.png" />
        <p className="legend">Colombia anuncia un Estatuto de Protección Temporal para regularizar a inmigrantes venezolanos</p>
      </div>
    </Carousel>
  );

}


export default Carusel;
