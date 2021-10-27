import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubMenu = () => {
  return (
    <SubBox>
      <Category>
        {CATEGORY_LIST.map(list => {
          const { id, category, url } = list;
          return (
            <li key={id}>
              <Link to={url}>{category}</Link>
            </li>
          );
        })}
      </Category>
    </SubBox>
  );
};

export default SubMenu;

const SubBox = styled.main`
  margin: 0 auto;
  width: 100%;
  border-bottom: 1px solid #e6e8eb;
`;

const Category = styled.ul`
  display: flex;
  list-style: none;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  li {
    margin-right: 10px;
    padding: 20px 30px 20px 0;
    top: 2px;

    a {
      text-decoration: none;
      color: #40474d;

      :hover {
        opacity: 0.7;
      }
    }
  }

  li:nth-child(2) > a {
    color: #0077d9;
    font-weight: bold;
  }
`;

const CATEGORY_LIST = [
  { id: 1, category: <i className="fas fa-bars" />, url: '/category' },
  { id: 2, category: '일반', url: '/' },
  { id: 3, category: '로맨스', url: '#' },
  { id: 4, category: '판타지', url: '#' },
  { id: 5, category: '만화', url: '#' },
  { id: 6, category: 'BL', url: '#' },
];
