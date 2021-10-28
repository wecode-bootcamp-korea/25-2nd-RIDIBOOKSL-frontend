import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import API from '../../../../../config';
import AuthorItem from './AuthorItem/AuthorItem';
import BookItem from './BookItem/BookItem';

const MatchBox = ({ setIsBoxShow, searchWord }) => {
  const [authorList, setAuthorList] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch(`${API.default}/subscribe/search?keyword=${searchWord}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setAuthorList(res.author_list.slice(0, 3));
        setBookList(res.book_list.slice(0, 3));
      });
  }, [searchWord]);

  if (!authorList.length && !bookList.length)
    return <NoItem>일치하는 결과가 없습니다.</NoItem>;
  return (
    <MatchItem>
      {authorList.map(author => {
        return (
          <AuthorItem
            key={author.author_id}
            author={author}
            setIsBoxShow={setIsBoxShow}
          />
        );
      })}
      {authorList.length > 0 && bookList.length > 0 && <Line />}
      {bookList.map(book => {
        return (
          <BookItem
            key={book.book_id}
            book={book}
            setIsBoxShow={setIsBoxShow}
          />
        );
      })}
    </MatchItem>
  );
};

const NoItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  height: 46px;
  color: rgb(158, 167, 173);
`;

const MatchItem = styled.ul`
  li {
    &:first-child {
      border-radius: 3px 3px 0 0;
    }

    &:last-child {
      border-radius: 0 0 3px 3px;
    }

    a {
      display: flex;
      align-items: center;
      padding: 12px 16px;
    }
  }
`;

const Line = styled.hr`
  margin: 4px 16px;
  border: 0;
  border-top: 1px solid rgb(230, 232, 224);
`;

export default MatchBox;
