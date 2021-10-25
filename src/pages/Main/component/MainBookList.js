import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PatchDiscount from './PatchDiscount';
import PatchRental from './PatchRental';

const MainBookList = ({ title, bookData }) => {
  return (
    <MainBookListBox>
      <BookListTitle>{title}</BookListTitle>
      <BookList>
        {bookData?.map((book, idx) => {
          const { book_id, thumbnail, patch, book_name, author } = book;
          return (
            <li key={book_id}>
              <Link to={`/books/${book_id}`}>
                <BookImgBox>
                  <div>
                    <img alt="booksCover" src={thumbnail} />
                  </div>
                </BookImgBox>
                {patch !== 0 && (
                  <Patch>
                    {patch === 1 ? <PatchDiscount /> : <PatchRental />}
                  </Patch>
                )}
                <BookInfo>
                  <h3>{idx + 1}</h3>
                  <BookSpec>
                    <BookTitle>{book_name}</BookTitle>
                    <BookAuthor>{author}</BookAuthor>
                  </BookSpec>
                </BookInfo>
              </Link>
            </li>
          );
        })}
      </BookList>
    </MainBookListBox>
  );
};

export default MainBookList;

const MainBookListBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2%;
  width: 964px;
`;

const BookListTitle = styled.h2`
  padding: 6px 0 0;
  font-size: 19px;
  font-weight: normal;
`;

const BookList = styled.ul`
  display: grid;
  grid: repeat(3, 138px) / auto-flow 308px;
  grid-column-gap: 13px;
  padding: 10px 20px 20px;
  justify-content: center;
  list-style: none;

  li {
    position: relative;
    display: flex;

    a {
      position: relative;
      display: flex;
      text-decoration: none;
    }
  }
`;

const BookImgBox = styled.div`
  margin-right: 18px;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    width: 80px;

    img {
      display: block;
      width: 80px;
      height: 150px;
      padding: 20% 0;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;

const BookInfo = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  border-bottom: 1px solid #e6e8eb;

  h3 {
    height: 22px;
    margin-right: 21px;
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
`;

const BookSpec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const BookTitle = styled.span`
  justify-content: center;
  margin-right: 21px;
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const BookAuthor = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #636c73;
`;

const Patch = styled.div`
  div {
    top: 5px;
    left: -10px;
  }
`;
