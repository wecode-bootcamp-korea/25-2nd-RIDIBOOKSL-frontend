import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PatchDiscount from './PatchDiscount';
import PatchRental from './PatchRental';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainNowRelease = ({ newBook, title }) => {
  return (
    <MainReleaseList>
      <Main>
        <Subject>{title}</Subject>
        <BookList>
          <BookSlider {...settings}>
            {newBook?.map(bookData => {
              const { book_id, thumbnail, patch, book_name, author } = bookData;
              return (
                <li key={book_id}>
                  <Link to={`/product/${book_id}`}>
                    <ImgBox>
                      <img alt="newBookCover" src={thumbnail} />
                    </ImgBox>
                    {patch === 1 ? <PatchDiscount /> : <PatchRental />}
                    <BookInfo>
                      <h3>{book_name}</h3>
                      <p>{author}</p>
                    </BookInfo>
                  </Link>
                </li>
              );
            })}
          </BookSlider>
        </BookList>
      </Main>
    </MainReleaseList>
  );
};

export default MainNowRelease;

const MainReleaseList = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  width: 100%;
  color: white;
  background-color: #17202e;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
`;

const Subject = styled.h2`
  padding: 6px 25px 0;
  font-size: 19px;
  font-weight: normal;
`;

const BookList = styled.ul`
  padding: 10px;
  list-style: none;

  li {
    position: relative;
    padding: 20px;
    align-content: center;

    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const ImgBox = styled.div`
  text-align: left;
  top: 6px;
  left: 10px;

  img {
    width: 100%;

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
    color: lightgray;
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
    background-color: gray;
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
    right: -6%;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 6,
  slidesToScroll: 6,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
};
