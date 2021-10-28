import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar/SearchBar';
import MenuItem from './MenuItem/MenuItem';

const MENU_LIST = [
  { id: 1, icon: 'home', name: '홈', url: '' },
  { id: 2, icon: 'bell', name: '알림', url: 'notification' },
  { id: 3, icon: 'shopping-cart', name: '카트', url: 'cart' },
  { id: 4, icon: 'user', name: '마이리디', url: 'account' },
];

const Nav = () => {
  const [token, setToken] = useState(localStorage.getItem('access_token'));

  const ClickLogOut = () => {
    localStorage.removeItem('access_token');
    setToken('');
    alert('로그아웃 되었습니다.');
  };

  return (
    <Navbar>
      <header>
        <Topbar>
          <Logo>
            <Link to="/">
              RIDIBOOKSL<span>│BOOKSL</span>
            </Link>
          </Logo>
          <Button>
            {token ? (
              <>
                <Link to="/">
                  캐시충전
                  <i className="fas fa-coins" />
                </Link>
                <button onClick={ClickLogOut}>로그아웃</button>
              </>
            ) : (
              <>
                <Link to="/login">회원가입</Link>
                <Link to="/login" type="login">
                  로그인
                </Link>
              </>
            )}
          </Button>
          <SearchBar />
        </Topbar>
        <Menubar>
          {MENU_LIST.map(menu => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
        </Menubar>
      </header>
    </Navbar>
  );
};

const Navbar = styled.div`
  width: 100%;
  background-color: #1f8ce6;
  color: white;

  header {
    max-width: 1000px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }
`;

const Topbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 16px 20px 28px 20px;

  @media (max-width: 999px) {
    flex-wrap: wrap;
    padding: 9px 10px 0 10px;
  }
`;

const Logo = styled.h1`
  margin-right: 16px;
  width: 240px;
  height: 18px;
  font-family: 'Exo', sans-serif;
  font-weight: 800;
  font-size: 22px;

  a,
  span {
    color: white;
    letter-spacing: 0.5px;
  }

  span {
    opacity: 0.6;
  }

  @media (max-width: 999px) {
    width: unset;
    height: 15px;
    font-size: 16px;
  }
`;

const Button = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  order: 3;

  a,
  button {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 30px;
    border: 1px solid #99d1ff;
    border-radius: 3px;
    color: white;
    font-size: 13px;
    font-weight: 700;
    word-break: keep-all;
    transition-duration: 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &:last-child {
      margin-left: 6px;
      background-color: white;
      color: #1f8ce6;
    }

    i {
      margin-left: 2px;
    }
  }

  @media (max-width: 999px) {
    order: 2;

    a,
    button {
      padding: 0 8px;
    }
  }
`;

const Menubar = styled.ul`
  display: flex;
  padding: 0 20px;

  @media (max-width: 999px) {
    flex: 1;
    padding: 2px 0 0 0;
  }
`;

export default Nav;
