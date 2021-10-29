import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Img from './Img';
import Profile from './Profile';
import Text from './Text';
import Score from './Score';
import BestSeller from './BestSeller';
import MainBox from './MainBox';
import Author from './Author';

const Detail = () => {
  const [data, setData] = useState([]);
  const { thumbnail, publication_date } = data;

  useEffect(() => {
    fetch(`http://10.58.7.207:8000/products/1`)
      // fetch('data/DetailData.json')
      .then(res => res.json())
      .then(data => {
        setData(data.product_detail[0]);
      });
  }, []);

  return (
    data && (
      <Section>
        <ArticleWrapper>
          <Article>
            <Img ImgData={thumbnail} />
            <MainWrap>
              <MainBox />
            </MainWrap>
          </Article>
          <Published>
            <ul>
              <li>
                <span className="title">출간 정보</span>
                <div>
                  <span>{publication_date}</span>
                  <span>전자책 출간</span>
                  <br />
                  <span>2021.10.18</span>
                  <span>종이책 출간</span>
                </div>
              </li>
              <li>
                <span className="title">파일 정보</span>
                <span> EPUB | 421MB | 약37.5만 자</span>
              </li>
              <li>
                <span className="title">ISBN</span>
                <span>9232983474534</span>
              </li>
            </ul>
            <ul>
              <li>
                <span className="title">듣기 기능</span>
                <span>
                  <i className="fas fa-headphones-alt" />
                  듣기 가능
                </span>
              </li>
              <li>
                <span className="title">지원 기기</span>
                <span>
                  <i className="far fa-sticky-note" />
                  PAPER
                </span>
                <span>
                  <i className="fab fa-apple" />
                  iOS
                </span>
                <span>
                  <i className="fab fa-android" />
                  Android
                </span>
                <span>
                  <i className="fab fa-windows" />
                  PC
                </span>
                <span>
                  <i className="fas fa-times-circle" />
                  Mac
                </span>
              </li>
            </ul>
          </Published>

          <Wrapper>
            <>
              <MainTitleBox>작품 소개</MainTitleBox>
              <Text />
            </>
          </Wrapper>

          <Wrapper>
            <MainTitleBox>저자 프로필</MainTitleBox>
            <Profile />

            <Author />
            <MainTitleBox>별점 리뷰</MainTitleBox>
            <Score />
          </Wrapper>
        </ArticleWrapper>

        {/* 오른쪽 박스 */}
        <Aside>
          <BestSeller />
        </Aside>
      </Section>
    )
  );
};

export default Detail;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 10% 0 10%;
`;

const Article = styled.article`
  display: flex;
  padding-top: 50px;
  padding-left: 30px;
  width: 100%;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  border-right: 1px solid lightgray;
`;

//중간 박스
const MainWrap = styled.div`
  margin-left: 30px;
  margin-right: 40px;
  width: 100%;

  .categoryBox {
    display: flex;
    font-size: 13px;

    a {
      padding: 0 4px;
      color: black;
      text-decoration: none;
    }
  }
`;

const Published = styled.div`
  display: flex;
  width: 90%;
  margin: 30px 40px;
  padding: 15px;
  border: 5px solid #f2f4f5;

  li {
    display: flex;
    margin: 10px;

    .title {
      font-weight: bold;
    }

    span {
      margin: 3px;
      font-size: 14px;
      color: #666;
    }

    i {
      margin: 0 4px;
    }
  }
`;

const Wrapper = styled.div`
  margin: 20px 40px;
`;

const MainTitleBox = styled.h3`
  font-size: 22px;
  border-bottom: 3px solid #59667a;
  padding-bottom: 10px;
  color: #59667a;
`;

//오른쪽 박스
const Aside = styled.aside`
  //오른쪽 이미지 박스
  .bannerImg {
    width: 200px;
    height: 240px;
  }

  //베스트셀러 리스트 박스
  .bestSellerBanner {
    margin: 40px 0 0 20px;

    .bannerTitleBox {
      padding-bottom: 8px;
    }

    .bannerListLink {
      display: flex;
      padding: 9px 10px 9px 0;
      border-top: 1px solid lightgray;
      font-size: 14px;
      text-decoration: none;
    }
    .ranking {
      width: 26px;
      margin-right: 15px;
      color: red;
    }

    .bestSellerList {
      color: #666;
    }
  }
`;
