import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const selectPatch = num => {
  switch (num) {
    case 1:
      return (
        <DiscountLabel>
          10<span>%</span>
        </DiscountLabel>
      );
    case 2:
      return <RentalLabel>대여</RentalLabel>;
    default:
      return null;
  }
};

const BookItem = ({ book, viewDirection }) => {
  return (
    <Book viewDirection={viewDirection}>
      <ThumbnailWrapper>
        <Thumbnail to={`/books/${book.book_id}`}>
          {selectPatch(book.patch)}
          <img src={`${book.book_thumbnail}`} alt="책 표지" />
        </Thumbnail>
      </ThumbnailWrapper>
      <MetaDataWrapper viewDirection={viewDirection}>
        <BookTitle>
          <Link to={`/books/${book.book_id}`}>{book.book_name}</Link>
        </BookTitle>
        <BookInform viewDirection={viewDirection}>
          <Author>
            <Link to={`/author/${book.author_id}`}>{book.author_name}</Link>
          </Author>
          <Rating viewDirection={viewDirection}>
            <i className="fas fa-star" /> {book.rating.toFixed(1)}점
            <span>({book.rating_count})</span>
          </Rating>
          <SubInform viewDirection={viewDirection}>
            <Publisher>{book.book_publisher}</Publisher>
            <Category>{book.book_category}</Category>
          </SubInform>
        </BookInform>
        <BookSummary viewDirection={viewDirection}>
          <Link to={`/books/${book.book_id}`}>책 줄거리 .... 북슬북슬 팀</Link>
        </BookSummary>
        <BookPrice viewDirection={viewDirection}>
          {book.patch === 2 && (
            <p>
              대여<Price>1,500원</Price>
            </p>
          )}
          <p>
            구매
            <Price>
              {book.sale_price
                ? book.sale_price.toLocaleString()
                : book.book_price.toLocaleString()}
              원
            </Price>
            {book.sale_price && <Discount>(10%↓)</Discount>}
          </p>
        </BookPrice>
      </MetaDataWrapper>
    </Book>
  );
};

const Book = styled.div`
  display: ${({ viewDirection }) =>
    viewDirection === 'row' ? 'flex' : 'block'};
  padding: 15px 0;
  width: ${({ viewDirection }) => (viewDirection === 'row' ? '100%' : '20%')};
  border-bottom: ${({ viewDirection }) =>
    viewDirection === 'row' ? '1px solid #dfdfdf' : 'none'};

  @media (max-width: 999px) {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #dfdfdf;
  }
`;

const ThumbnailWrapper = styled.div`
  padding: 0 10px;
  width: 100%;
  height: 167px;
  max-width: 150px;

  @media (max-width: 999px) {
    padding-left: 0;
    max-width: 110px;
  }
`;

const Thumbnail = styled(Link)`
  display: block;
  position: relative;

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -7px;
    left: -7px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    color: white;
    font-size: 14px;
    font-weight: 700;
    z-index: 10;
    box-shadow: 0 2px 3px 0 rgb(0 0 0 / 30%);
  }

  img {
    width: 100%;
    max-height: 167px;
  }
`;

const RentalLabel = styled.span`
  background-color: #3ea590;
  border: 1px solid #15967d;
`;

const DiscountLabel = styled.span`
  background-color: #59667a;
  border: solid 1px rgba(0, 0, 0, 0.15);

  span {
    margin-left: 1px;
    font-size: 8px;
  }
`;

const MetaDataWrapper = styled.div`
  padding: 0 10px;
  padding-top: ${({ viewDirection }) =>
    viewDirection === 'row' ? '0' : '5px'};
  font-size: 13px;

  @media (max-width: 999px) {
    padding-top: 0;
  }
`;

const BookTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.4em;
  word-break: keep-all;

  a {
    color: black;
  }
`;

const BookInform = styled.div`
  display: ${({ viewDirection }) =>
    viewDirection === 'row' ? 'flex' : 'block'};
  line-height: 1.2em;

  @media (max-width: 999px) {
    display: block;
    padding-top: 4px;
  }
`;

const Author = styled.p`
  margin-top: 4px;

  a {
    color: rgb(99, 108, 115);
    font-size: 14px;
  }
`;

const Rating = styled.p`
  margin: ${({ viewDirection }) =>
    viewDirection === 'row' ? '4px 8px 0 8px' : '4px 0 0 0'};
  padding: ${({ viewDirection }) => (viewDirection === 'row' ? '0 8px' : '0')};
  border-left: ${({ viewDirection }) =>
    viewDirection === 'row' ? '1px solid rgb(209, 213, 217)' : 'none'};
  border-right: ${({ viewDirection }) =>
    viewDirection === 'row' ? '1px solid rgb(209, 213, 217)' : 'none'};
  color: rgb(250, 114, 46);
  font-weight: 700;

  span {
    margin-left: 2px;
    color: rgb(153, 153, 153);
    font-size: 12px;
    font-weight: 400;
  }

  @media (max-width: 999px) {
    padding: 0;
    border: none;
    margin: 4px 0 0 0;
  }
`;

const SubInform = styled.div`
  display: ${({ viewDirection }) =>
    viewDirection === 'row' ? 'flex' : 'none'};
  margin-top: 4px;
  color: rgb(128, 137, 145);

  @media (max-width: 999px) {
    display: flex;
  }
`;

const Publisher = styled.p`
  padding-right: 8px;
  border-right: 1px solid rgb(209, 213, 217);
`;

const Category = styled.p`
  padding-left: 8px;
`;

const BookSummary = styled.div`
  display: ${({ viewDirection }) =>
    viewDirection === 'row' ? '-webkit-box' : 'none'};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 9px;
  max-height: 4.5em;
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  word-wrap: break-word;

  a {
    color: rgb(102, 102, 102);
  }

  @media (max-width: 999px) {
    display: none;
  }
`;

const BookPrice = styled.div`
  margin-top: ${({ viewDirection }) =>
    viewDirection === 'row' ? '12px' : '8px'};
  color: rgb(102, 102, 102);

  p {
    margin-bottom: 6px;

    span {
      margin-left: 4px;
      font-weight: 800;
    }
  }

  @media (max-width: 999px) {
    margin-top: 12px;
  }
`;

const Price = styled.span`
  color: rgb(31, 140, 230);
`;

const Discount = styled.span`
  color: rgb(235, 88, 71);
  font-size: 12px;
`;

export default BookItem;
