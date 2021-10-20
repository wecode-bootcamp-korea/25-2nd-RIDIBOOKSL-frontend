import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BookItem = ({ setIsBoxShow, book }) => {
  return (
    <Item className="searchBoxItem">
      <Link
        to={`/books/${book.book_id}`}
        onClick={() => {
          setIsBoxShow(false);
        }}
      >
        <Title>{book.book_name}</Title>
        <SubInfo>{book.book_author[0]}</SubInfo>
        <div />
        <SubInfo>{book.book_publisher}</SubInfo>
      </Link>
    </Item>
  );
};

const Item = styled.li`
  a {
    flex-wrap: wrap;

    span {
      margin-right: 5px;
      line-height: 1.4em;
    }

    div {
      margin-right: 5px;
      width: 1px;
      height: 12px;
      background-color: rgb(230, 232, 235);
    }
  }
`;

const Title = styled.span`
  flex: 0 0 auto;
  margin-right: 8px;
  color: black;
  word-break: keep-all;
`;

const SubInfo = styled.span`
  color: rgb(128, 137, 145);
`;

export default BookItem;
