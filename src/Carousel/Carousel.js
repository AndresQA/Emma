import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carusel = () => {

  const onChange = () => { }

  const onClickThumb = () => { }

  const onClickItem = () => { }

  return (
    <Carousel showArrows={true} autoPlay={true}  onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb} showThumbs={false}>
      <div>
        <img src="/images/carousel1.png" />
        <p className="legend">Legend 1</p>
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
