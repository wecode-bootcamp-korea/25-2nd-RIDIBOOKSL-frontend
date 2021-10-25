import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryList = ({ genre }) => {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  };

  const { idx, title, spec } = genre;
  return (
    <Div onMouseOver={toggleMenu} onMouseOut={toggleMenu} key={idx}>
      <H3>{title}</H3>
      <i className="fas fa-angle-double-right fa-la" />
      <Ul show={isOpen}>
        {spec.map((kind, idx) => (
          <Li key={idx}>
            <LinkBtn to={`/category/${idx + 100}`}>{kind}</LinkBtn>
          </Li>
        ))}
      </Ul>
    </Div>
  );
};

export default CategoryList;

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 34px;
  padding: 17px 20px;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: #579edf;
    color: white;
  }

  .fas {
    font-size: 10px;
    color: #579edf;
  }
`;

const H3 = styled.h3`
  cursor: pointer;
`;

const Ul = styled.ul`
  position: absolute;
  width: 157px;
  top: -3px;
  left: 158px;

  ${({ show }) => {
    if (show) {
      return `
    transition: 1s;
    background-color: #ebf6ff;`;
    } else {
      return `
    display: none;
    transition: 0.5s;`;
    }
  }}
`;

const Li = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 29px;
  padding-left: 10px;
  color: black;
  font-weight: 300;
  font-size: 12px;
  cursor: pointer;
`;

const LinkBtn = styled(Link)`
  text-decoration: none;
  color: #666;

  &:hover {
    color: #579edf;
  }
`;
