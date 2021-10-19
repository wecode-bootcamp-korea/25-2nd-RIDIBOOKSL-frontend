import React, { useState } from 'react';
import styled from 'styled-components';

const Footer = () => {
  const [isDrop, setIsDrop] = useState(false);
  const onClick = () => setIsDrop(!isDrop);

  return (
    <FooterBox>
      <Header>
        <Subject>
          <ul>
            <li>고객센터</li>
            <li>공지사항</li>
          </ul>
        </Subject>
        <Section>
          <ul className="list">
            <li>
              <em>RIDI</em>PAPER
            </li>
            <li>제휴카드</li>
            <li>뷰어 다운로드</li>
            <li>리디캐시 충전</li>
          </ul>
          <ul className="list">
            <li>콘텐츠 제공 문의</li>
            <li>CP 사이트</li>
            <li>사업 제휴 문의</li>
            <li>페이퍼 대량구매 안내</li>
          </ul>
          <ul className="list">
            <li>페이스북</li>
            <li>인스타그램</li>
          </ul>
          <ul className="list">
            <li>회사소개</li>
            <li>인사채용</li>
          </ul>
        </Section>
      </Header>
      <Company>
        <div>리디북슬북슬(주) 사업자 정보</div>
        <button onClick={onClick}>⌵</button>
        {isDrop && (
          <DropInfo className="dropBox">
            <div className="dropInfo">
              <div>대표자&ensp;리디북슬북슬</div>
              <div>사업자 등록번호&nbsp;123-45-67890</div>
              <div>통신판매업 신고번호&ensp;제 2021-서울강남 12-34567호</div>
            </div>
            <div className="dropInfo">
              <div>이메일&ensp;wecode@wecode.com</div>
              <div>대표전화&ensp;1234-5678</div>
              <div>
                주소&ensp;서울시 강남구 테헤란로 427 위워크 선릉2호점 10층
              </div>
            </div>
          </DropInfo>
        )}
      </Company>
      <Foot>
        <p>© RIDI Corp.</p>
        <ul>
          <li>이용약관</li>
          <li>개인 정보 처리 방침</li>
          <li>청소년 보호 정책</li>
          <li>사업자 정보 확인</li>
        </ul>
      </Foot>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.section`
  color: #ffffff;
  background: #303538;
`;

const Header = styled.header`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px 16px 0;
  max-height: 700px;
`;

const Subject = styled.h2`
  min-width: 192px;
  display: flex;
  margin-right: 42px;

  ul {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    color: white;

    li {
      :hover {
        opacity: 0.7;
      }

      ::after {
        position: relative;
        font-size: 11px;
        content: '|';
        margin: 0 10px;
      }

      &:last-child:after {
        content: ' ';
      }
    }
  }
`;

const Section = styled.section`
  display: flex;

  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-right: 16px;
    margin-bottom: 40px;

    li {
      width: 140px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: lighter;

      em {
        font-weight: bold;
      }

      :hover {
        opacity: 0.7;
      }
    }
  }
`;

const Company = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
  font-size: 11px;
  line-height: 1.82;
  color: #7e8992;

  :hover {
    opacity: 0.7;
  }

  div {
    display: inline;
    padding-right: 5px;
    font-size: 13px;
  }

  button {
    border: none;
    background: #303538;
    color: #7e8992;
  }
`;

const DropInfo = styled.div`
  .dropInfo {
    display: block;

    div {
      ::after {
        position: relative;
        font-size: 10px;
        content: '|';
        top: -0.3px;
        margin: 0px 5.5px;
      }

      &:last-child:after {
        content: ' ';
      }
    }
  }
`;

const Foot = styled.footer`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 10px;

  p {
    width: 83px;
    height: 17px;
    font-size: 14px;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    color: #7e8992;
    margin-right: 24px;
  }

  ul {
    display: flex;

    li {
      height: 20px;
      font-size: 11px;
      line-height: 1.82;
      color: #7e8992;

      ::after {
        font-size: 10px;
        content: '|';
        color: #525a61;
        margin: 0 5.5px;
      }

      &:last-child:after {
        content: ' ';
      }

      :hover {
        opacity: 0.7;
      }
    }
  }
`;
