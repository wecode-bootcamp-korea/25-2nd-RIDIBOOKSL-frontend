import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import API from '../../config';

const Author = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API.detail}`)
      .then(res => res.json())
      .then(data => {
        setData(data.product_detail[0]);
      });
  }, []);

  return (
    <>
      <TitleWrapper>
        <TitleBox>대표 저서</TitleBox>
        <Sort>
          <SortButton>인기순</SortButton> | <SortButton>최신순</SortButton> |
          <SortButton>평점순</SortButton>
        </Sort>
      </TitleWrapper>

      <BookWrapper>
        {data.author_info?.[0].books.map(book => (
          <BookContentBox key={book}>
            <ImgLink to="/">
              <BookImg alt="bookImg" src={book.thumbnail} />
            </ImgLink>
            <BookTitle>{book.name}</BookTitle>
            <StarAverage>
              <StarIconBox>
                {[1, 2, 3, 4, 5].map(el => (
                  <i
                    key={el}
                    className={`fas fa-star  ${
                      el <= book.rating && 'yellowStar'
                    }`}
                  />
                ))}
              </StarIconBox>
              <span className="score">{book.rating}</span>
              <span className="score">2명</span>
            </StarAverage>
          </BookContentBox>
        ))}
      </BookWrapper>
      <Box>
        <AllButton>
          출간작 전체보기 <i className="fas fa-angle-right" />
        </AllButton>
      </Box>
    </>
  );
};

export default Author;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  font-weight: 600;
`;

const Sort = styled.div`
  color: lightgray;
  font-size: 13px;
`;

const SortButton = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  font-size: 11px;
  cursor: pointer;

  &:first-child {
    color: black;
    font-weight: 600;
  }
`;

const BookWrapper = styled.section`
  display: flex;
  margin: 30px 30px 30px 0;
`;

const BookContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  margin-left: 40px;
`;
const ImgLink = styled(Link)``;
const BookImg = styled.img`
  width: 100%;
  height: 130px;
`;

const BookTitle = styled.div`
  margin-top: 15px;
  width: 100%;
  font-size: 12px;
  font-weight: 600;
`;

const StarAverage = styled.div`
  font-size: 10px;
`;

const StarIconBox = styled.span`
  margin-right: 3px;
  color: lightgray;

  .yellowStar {
    color: orange;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const AllButton = styled.button`
  padding: 9px;
  margin-bottom: 50px;
  background-color: white;
  color: gray;
  font-size: 11px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid lightgray;
  cursor: pointer;

  i {
    margin-left: 3px;
  }
`;
