import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SignupHeader = () => {
  return (
    <Header>
      <H1>
        <LinkBtn to="/">RIDIBOOKS</LinkBtn>
      </H1>
    </Header>
  );
};

export default SignupHeader;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-weight: 900;
  color: #1f8cb6;
  border-bottom: 1px solid #d6deeb;
`;

const H1 = styled.h1``;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #1f8cb6;
`;
