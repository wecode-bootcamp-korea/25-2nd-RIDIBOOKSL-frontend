import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AuthorItem from './AuthorItem/AuthorItem';
import BookItem from './BookItem/BookItem';

const MatchBox = props => {
  const { searchWord } = props;
  const [authorList, setAuthorList] = useState([]);
  const [bookList, setBookList] = useState([]);

  // useEffect(() => {
  //   fetch(`http://10.58.4.89:3000/subscribe/core?keyword=${searchWord}`, {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(1);
  //       // setAuthorList(), setBookList();
  //     });
  // }, [searchWord]);

  if (!authorList.length && !bookList.length)
    return <NoItem>일치하는 결과가 없습니다.</NoItem>;
  return (
    <>
      <MatchItem>
        <AuthorItem />
        <AuthorItem />
        <AuthorItem />
      </MatchItem>
      {authorList.length > 0 && <Line />}
      <MatchItem>
        <BookItem />
        <BookItem />
        <BookItem />
      </MatchItem>
    </>
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

    &:hover {
      background-color: rgb(247, 250, 252);
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
