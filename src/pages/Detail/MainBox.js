import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainBox = () => {
  const [data, setData] = useState([]);
  const { menu, category, name, rating, publisher, price, patch, sale_price } =
    data;

  useEffect(() => {
    // fetch('/data/DetailData.json')
    fetch(`http://10.58.7.207:8000/products/1`)
      .then(res => res.json())
      .then(data => {
        setData(data.product_detail[0]);
      });
  }, []);

  return (
    <>
      <ul className="categoryBox">
        <StyleLink to="/">
          <li>{menu}</li>
        </StyleLink>
        <i className="fas fa-chevron-right" />
        <StyleLink to="/">
          <li>{category}</li>
        </StyleLink>
        <li>,</li>
        <StyleLink to="/">
          <li>소설</li>
        </StyleLink>
        <i className="fas fa-chevron-right" />
        <StyleLink to="/">
          <li>추리/미스터리/스릴러</li>
        </StyleLink>
      </ul>

      <TitleBox>{name}</TitleBox>
      <StarBox>
        <span className="star">
          {[1, 2, 3, 4, 5].map(el => (
            <i
              key={el}
              className={`fas fa-star ${el <= data.rating && 'yellowStar'}`}
            />
          ))}
        </span>
        <span className="score">{rating}</span>
        <span className="score">점</span>
        <span className="count">(15명)</span>
      </StarBox>

      <Author>
        <p>
          <StyleLink to="/">{name}</StyleLink>
          <span>저</span>
        </p>
        <p>
          <StyleLink to="/">{publisher}</StyleLink>
          <span>출판</span>
        </p>
      </Author>

      <EventBox>
        <div className="event">
          <span className="colorBox">이벤트</span>
          <div className="textBox">
            <StyleLink to="/">
              <div>[EVENT]요 네스뵈 장편소설, (킹덤) 출간 이벤트</div>
            </StyleLink>
            <StyleLink to="/">
              <div>
                <i className="fas fa-angle-right" />
              </div>
            </StyleLink>
          </div>
        </div>
      </EventBox>
      <Table>
        {patch === 2 ? (
          <thead>
            <tr className="rental">
              <td className="title">대여</td>
              <td className="product">권당 90일</td>
              <td />
              <td className="price">1,500원</td>
            </tr>
          </thead>
        ) : (
          <thead>
            <tr>
              <td rowSpan="2" className="title">
                구매
              </td>
              <td className="product">전자책 정가</td>
              <td />
              <td className="price">
                <span>{price}</span>원
              </td>
            </tr>
            <tr>
              <td className="product">판매가</td>
              <td className="price priceColor">
                {patch === 1 && (
                  <span className="nego">
                    10%
                    <i className="fas fa-long-arrow-alt-down" />
                  </span>
                )}
                <span>{patch === 1 ? sale_price : price}</span>원
              </td>
            </tr>
          </thead>
        )}
      </Table>

      <ButtonBox>
        <IconButtonHover>
          <i className="fas fa-heart" />
        </IconButtonHover>
        <IconButtonHover>
          <i className="fas fa-shopping-cart" />
        </IconButtonHover>
        <IconButtonHover>
          <i className="fas fa-gift" />
        </IconButtonHover>
        <button className="textButton">구매하기</button>
      </ButtonBox>
    </>
  );
};

export default MainBox;

const StyleLink = styled(Link)``;

const TitleBox = styled.p`
  margin: 25px 0;
  font-weight: 550;
  font-size: 35px;
`;

const StarBox = styled.div`
  font-size: 14px;

  .star {
    margin-right: 3px;
    color: lightgray;
  }

  .yellowStar,
  .score {
    margin-right: 3px;
    color: orange;
  }

  .count {
    color: #999;
  }
`;

const Author = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid lightgray;
  font-size: 15px;

  p {
    margin: 10px 0;
  }

  a {
    margin-right: 5px;
    color: gray;
    text-decoration: none;
  }

  span {
    color: #999;
  }
`;

const EventBox = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid lightgray;

  .event {
    display: flex;
  }

  .colorBox {
    text-align: center;
    width: 50px;
    height: 19px;
    margin-right: 10px;
    padding: 6px 8px;
    color: white;
    background-color: #22b8cf;
    font-size: 11px;
    border-radius: 2px;
  }

  .textBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-right: 10px;

    a {
      color: gray;
      text-decoration: none;
      font-size: 15px;
      font-weight: bold;

      i {
        width: 5px;
        height: 8px;
      }
    }
  }

  i {
    color: lightgray;
  }
`;

const Table = styled.table`
  margin: 20px 0;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  width: 100%;
  font-size: 14px;

  tr {
    position: relative;
    width: 100%;
  }

  .rental {
    border-bottom: 1px solid lightgray;
  }

  .title {
    border-right: 1px solid lightgray;
    text-align: center;

    background-color: #f7fafc;
  }

  .title,
  .product,
  .price {
    padding: 10px 0 10px 10px;
  }

  .product,
  .price {
    color: #808991;
  }

  .price {
    font-weight: bold;
    text-align: right;
  }

  .nego {
    margin-right: 5px;
    color: red;
  }

  .priceColor {
    position: absolute;
    right: 0;
    color: #1f8ce6;
  }

  .fa-long-arrow-alt-down {
    margin-left: 3px;
  }
`;

const ButtonBox = styled.div`
  text-align: right;

  button {
    margin-left: 5px;
    width: 48px;
    height: 50px;
    cursor: pointer;
    background-color: white;
    color: gray;
    font-size: 21px;
    border-radius: 5px;
    border: 1px solid lightgray;
  }

  .textButton {
    width: 112px;
    color: white;
    background-color: #1f8ce6;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      background-color: #0077d9;
    }
  }
`;

const IconButtonHover = styled.button`
  &:hover {
    background-color: #dcdcdc;
  }
`;
