import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PatchDiscount from './PatchDiscount';
import PatchRental from './PatchRental';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainBookSlider = ({ title, bookData }) => {
  return (
    <MainSliderBook>
      <Subject>{title}</Subject>
      <SliderList>
        <BookSlider {...settings}>
          {bookData?.map(bookData => {
            const { book_id, thumbnail, patch, book_name, author } = bookData;
            return (
              <li key={book_id}>
                <Link to={`/books/${book_id}`}>
                  <ImgBox>
                    <img alt="newBookCover" src={thumbnail} />
                  </ImgBox>
                  {patch !== 0 && (
                    <Patch>
                      {patch === 1 ? <PatchDiscount /> : <PatchRental />}
                    </Patch>
                  )}
                  <BookInfo>
                    <h3>{book_name}</h3>
                    <p>{author}</p>
                  </BookInfo>
                </Link>
              </li>
            );
          })}
        </BookSlider>
      </SliderList>
    </MainSliderBook>
  );
};

export default MainBookSlider;

const MainSliderBook = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2%;
  width: 964px;
`;

const Subject = styled.h2`
  padding: 6px 0 0;
  font-size: 19px;
  font-weight: normal;
`;

const SliderList = styled.ul`
  padding: 10px 0px 0px 0px;
  list-style: none;

  li {
    position: relative;
    margin: 10% 0 0 0;
    padding-left: 20px;
    padding: 6%;

    a {
      text-decoration: none;
      color: black;
    }
  }
`;
const ImgBox = styled.div`
  text-align: left;

  img {
    width: 120px;
    height: 180px;

    :hover {
      opacity: 0.7;
    }
  }
`;
const BookInfo = styled.div`
  h3 {
    margin-top: 15px;
    font-size: 14px;
    font-weight: bold;
    word-break: keep-all;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #636c73;
    word-break: keep-all;
  }
`;

const BookSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    top: 50%;
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
    left: -6%;
  }

  .slick-next {
    right: -3%;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
};

const Patch = styled.div`
  div {
    top: -1px;
    left: 3px;
  }
`;
