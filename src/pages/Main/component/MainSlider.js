import React from 'react';
import styled from 'styled-components';
import SLIDER_LIST from '../Data/SliderData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainSlider = () => {
  return (
    <StyledMainSlider {...settings}>
      {SLIDER_LIST.map(imgData => {
        const { id, imgAlt, imgUrl } = imgData;
        return (
          <div key={id}>
            <img alt={imgAlt} src={imgUrl} />
          </div>
        );
      })}
    </StyledMainSlider>
  );
};

export default MainSlider;

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  autoplayspeed: 200,
};

const StyledMainSlider = styled(Slider)`
  padding: 20px 0 0 0;
  margin: 0 auto;
  width: 95%;

  img {
    padding: 0 20px;
    border-radius: 6px;
    text-align: center;
    width: 100%;
    height: 270px;
  }

  .slick-prev,
  .slick-next {
    top: 54%;
    z-index: 1;

    width: 40px;
    height: 40px;

    border-radius: 40px;
    opacity: 0.6;
    margin: 0 4px;
    box-shadow: 0 0.8px 5px gray;
    background-color: lightgray;
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    opacity: 0.4;
  }

  .slick-prev {
    left: 31%;
  }

  .slick-next {
    right: 31%;
  }
`;
