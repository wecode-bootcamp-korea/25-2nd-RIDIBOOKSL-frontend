import React from 'react';
import styled from 'styled-components';

const CategoryColumn = ({ genre }) => {
  return genre.genre.map((genre, idx) => (
    <ColumnMenu key={idx}>
      <H3>
        <A href="#c">{genre.title}</A>
        <i className="fas fa-angle-double-right fa-la" />
      </H3>
      <ul>
        {genre.spec.map((kind, idx) => (
          <Li key={idx}>{kind}</Li>
        ))}
      </ul>
    </ColumnMenu>
  ));
};

export default CategoryColumn;

const ColumnMenu = styled.div`
  width: 100%;
  padding: 0 15px;
`;

const H3 = styled.h3`
  display: flex;
  width: 128px;
  height: 34px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #579edf;
  border-radius: 4px;

  &:hover {
    background-color: #0f5e9c;
  }

  i {
    color: white;
  }
`;

const A = styled.a`
  color: white;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;

const Li = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 27px;
  padding: 14px 10px;
  color: #666;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #579edf;
  }
`;
