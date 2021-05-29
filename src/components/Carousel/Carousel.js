import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carusel = () => {

  const onChange = () => { }

  const onClickThumb = () => { }

  const onClickItem = () => { }

  return (
    <Carousel showArrows={true} autoPlay={true} showStatus={false} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} infiniteLoop={true} showThumbs={false}>
      <div>
        <a href="https://www.valoraanalitik.com/2021/03/15/efecto-migracion-venezolanos-a-colombia-en-precios-y-salarios/#:~:text=Este%20es%20el%20efecto%20de,Colombia%20en%20precios%20y%20salarios&text=Daly%20asocia%20el%20aumento%20de,bienes%20y%20servicios%20no%20transables." target="_blank">
          <img src="/images/carousel1.png" />
          <p className="legend">Este es el efecto de la migración de venezolanos a Colombia en precios y salarios</p>
        </a>
      </div>
      <div>
        <a href="https://www.semana.com/economia/articulo/migracion-venezolana-puede-disminuir-salarios-y-bajar-la-inflacion-en-colombia/202152/" target="_blank">
          <img src="/images/carousel2.png" />
          <p className="legend">Migración venezolana puede disminuir salarios y bajar la inflación en Colombia</p>
        </a>
      </div>
      <div>
        <a href="https://www.france24.com/es/am%C3%A9rica-latina/20210208-colombia-inmigracion-venezolanos-estatuto-temporal-regularizacion" target="_blank">
          <img src="/images/carousel3.png" />
          <p className="legend">Colombia anuncia un Estatuto de Protección Temporal para regularizar a inmigrantes venezolanos</p>
        </a>
      </div>

    </Carousel>
  );

}


export default Carusel;
