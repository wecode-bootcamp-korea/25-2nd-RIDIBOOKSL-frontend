import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthorItem = () => {
  return (
    <li>
      <Link to="/">
        <Icon>
          <i className="fas fa-user" />
        </Icon>
        <Author>조앤.K.롤링</Author>
        <Career>〈해리포터〉 외 9권</Career>
      </Link>
    </li>
  );
};

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 22px;
  margin-right: 6px;
  padding: 5px;
  background-color: rgb(242, 244, 245);
  border-radius: 22px;

  i {
    color: rgb(209, 213, 217);
    font-size: 12px;
  }
`;

const Author = styled.span`
  flex: 0 0 auto;
  margin-right: 8px;
  color: black;
`;

const Career = styled.span`
  color: rgb(128, 137, 145);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default AuthorItem;
