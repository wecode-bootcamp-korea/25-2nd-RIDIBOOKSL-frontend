import React from 'react';
import CategoryList from './CategoryList';
import CategoryColumn from './CategoryColumn';
import styled from 'styled-components';
import { CategoryData } from './CategoryData';

const Category = () => {
  return (
    <CategoryBox>
      <CategoryInnerBox>
        <CategoryMenu>
          <Novel>
            {CategoryData[1].genres?.map((genre, idx) => (
              <CategoryList key={idx} genre={genre} />
            ))}
          </Novel>
        </CategoryMenu>
        <CategoryMenu BackgroundColor="blue" />
        {CategoryData[0].genres?.map((genre, idx) => (
          <CategoryMenu key={idx}>
            <CategoryColumn genre={genre} />
          </CategoryMenu>
        ))}
      </CategoryInnerBox>
    </CategoryBox>
  );
};

export default Category;

const CategoryBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const CategoryInnerBox = styled.div`
  display: flex;
  width: 1114px;
  height: 617px;
`;

const CategoryMenu = styled.div`
  width: 158px;
  height: 100%;
  padding-top: 15px;
  border: 0.5px solid #e5e8eb;
  border-right: none;
  background-color: #ffffff;

  &:last-child {
    border-right: 0.5px solid #e5e8eb;
  }

  ${({ BackgroundColor }) => {
    if (BackgroundColor === 'blue')
      return `background-color: #ebf6ff;
    `;
  }}
`;

const Novel = styled.div`
  width: 158px;
  height: 545px;
`;
