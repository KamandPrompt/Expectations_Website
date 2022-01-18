import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const style = { color: "white",  }

  return (
    <section className='slider'>
      <IoMdArrowRoundBack className='left-arrow' onClick={prevSlide} style={style} />
      <IoMdArrowRoundForward className='right-arrow' onClick={nextSlide} style={style} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image-carousel' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;