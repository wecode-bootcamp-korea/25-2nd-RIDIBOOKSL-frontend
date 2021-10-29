import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  return (
    <>
      <div className="bannerBox">
        <StyleLink to="/">
          <img alt="bannerImg" src="/images/img01.jpg" className="bannerImg" />
        </StyleLink>
      </div>
      <ul className="bestSellerBanner">
        <div className="bannerTitleBox">한국소설 베스트셀러 </div>
        {bestSellerList.map((list, index) => {
          return (
            <StyleLink to="/" className="bannerListLink" key={index}>
              <li className="ranking">{list.ranking}</li>
              <li className=" bestSellerList">{list.text}</li>
            </StyleLink>
          );
        })}
      </ul>
    </>
  );
};

export default BestSeller;

const StyleLink = styled(Link)``;

const bestSellerList = [
  {
    ranking: '1위',
    text: '아무튼',
  },
  {
    ranking: '2위',
    text: '작별하자',
  },
  {
    ranking: '3위',
    text: '달라쿠트 꿈 백화점',
  },
  {
    ranking: '4위',
    text: '어두운 밤',
  },
  {
    ranking: '5위',
    text: '호두',
  },
  {
    ranking: '6위',
    text: '우리의 빛의 속도',
  },
  {
    ranking: '7위',
    text: '영과 악의 기원',
  },
  {
    ranking: '8위',
    text: '환청이 들려',
  },
  {
    ranking: '9위',
    text: '반려 견',
  },
  {
    ranking: '10위',
    text: '사소한 거짓',
  },
];
