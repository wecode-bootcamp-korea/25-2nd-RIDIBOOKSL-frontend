import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MenuItem = ({ menu }) => {
  const location = useLocation();
  const [nowUrl, setNowUrl] = useState('');
  const [isSelectedMenu, setIsSelectedMenu] = useState(false);

  useEffect(() => {
    setNowUrl(location.pathname.split('/')[1]);
  }, [location]);

  useEffect(() => {
    setIsSelectedMenu(nowUrl === menu.url);
  }, [nowUrl, menu.url]);

  return (
    <Menu isSelectedMenu={isSelectedMenu}>
      <Link to={`/${menu.url}`}>
        <i className={`fas fa-${menu.icon}`} />
        <Name isSelectedMenu={isSelectedMenu}>{menu.name}</Name>
      </Link>
      <Underbar isSelectedMenu={isSelectedMenu} />
    </Menu>
  );
};

const Menu = styled.li`
  position: relative;
  display: flex;
  margin-right: 50px;
  padding: 0 4px;
  height: 33px;
  transition-duration: 0.2s;

  &:last-child {
    margin-right: 0;
  }

  ${({ isSelectedMenu }) =>
    !isSelectedMenu && '&:hover{opacity: 0.7; span{opacity: 0.7}}'}

  a {
    color: white;

    i {
      font-size: 20px;
    }
  }

  @media (max-width: 999px) {
    flex: 1;
    margin: 0;
    padding: 0;

    a {
      display: flex;
      justify-content: center;
      flex: 1;

      i {
        font-size: 24px;
      }
    }
  }
`;

const Name = styled.span`
  margin-left: 15px;
  font-size: 16px;
  font-weight: ${({ isSelectedMenu }) => (isSelectedMenu ? '600' : '400')};

  @media (max-width: 999px) {
    display: none;
  }
`;

const Underbar = styled.span`
  position: absolute;
  left: -1px;
  bottom: 0px;
  width: 100%;
  height: 3px;
  background-color: #99d1ff;
  opacity: ${({ isSelectedMenu }) => (isSelectedMenu ? '1' : '0')};
`;

export default MenuItem;
