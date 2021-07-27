import React, { useState } from 'react';
import Slider, { CustomArrowProps, Settings } from 'react-slick';

import img from './assets/images/atl.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface DirectionArrowProps extends CustomArrowProps {
  next?: boolean;
}
function DirectionArrow({
  onClick,
  next,
  className,
  style,
}: DirectionArrowProps) {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: 'block', background: 'green', color: 'red' }}
    >
      {'>'}
    </div>
  );
}

export const App = () => {
  const [slideMain, setSlideMain] = useState<Slider>();
  const [slideThumb, setSlideThumb] = useState<Slider>();
  // TODO put this outside of the component
  const SLIDER_SETTINGS: Settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // nextArrow: <DirectionArrow />,
    // prevArrow: <DirectionArrow />,
    // rows: 2,
  };
  return (
    <div>
      <div
        className='product_visuals'
        style={{ color: 'red', margin: '0 auto' }}
      >
        This is images placeholder
        {/* <Slider {...SLIDER_SETTINGS}> */}
        <Slider
          asNavFor={slideThumb}
          ref={(slider) => setSlideMain(slider as Slider)}
        >
          <div>
            <img src={img} alt='' />
          </div>
          <div>
            <h3>2000</h3>
          </div>
          <div>
            <img src={img} alt='' />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <Slider
          asNavFor={slideMain}
          ref={(slider) => setSlideThumb(slider as Slider)}
          slidesToShow={3}
          focusOnSelect={true}
          swipeToSlide={true}
          variableWidth={true}
        >
          <div>
            <img src={img} alt='' />
          </div>
          <div>
            <h3>2000</h3>
          </div>
          <div>
            <img src={img} alt='' />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>

      <div className='product_title'>
        <h1>Lorem ipsum dolor sit</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum sed
          animi odit temporibus maiores quos tenetur adipisci ducimus quia modi
          cumque ut repellat provident, deserunt quis, itaque tempore
          voluptatibus! Modi.
        </p>
      </div>
      <div className='product_image-size'>
        <form>
          <div className='form-group'>
            <label htmlFor='imageSize'>Size</label>
            <select name='imageSize' id='imageSize'>
              <option value='14'>14</option>
              <option value='28'>28</option>
            </select>
          </div>
        </form>
      </div>
      <div className='product_actions'>
        <button className='btn-buy'>Buy now</button>
      </div>
      <div className='product_info'>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <ul>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            </ul>
          </li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
      </div>
    </div>
  );
};
