import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BookItem = () => {
  return (
    <Item>
      <Link to="/">
        <Title>개정 번역판 | 해리 포터와 마법사의 돌</Title>
        <SubInfo>조앤.K.롤링</SubInfo>
        <div />
        <SubInfo>Pottermore</SubInfo>
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
