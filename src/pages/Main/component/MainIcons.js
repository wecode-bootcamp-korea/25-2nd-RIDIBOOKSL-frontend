import React from 'react';
import styled from 'styled-components';
import ICONS_DATA from '../Data/IconsData';

const MainIcons = () => {
  return (
    <MainIconsBox>
      <IconsList>
        {ICONS_DATA.map(item => {
          const { id, icon, backColor, name } = item;
          return (
            <li key={id}>
              <Icon color={backColor}>
                <i className={`${icon} fa-2x`} />
              </Icon>
              <IconName>{name}</IconName>
            </li>
          );
        })}
      </IconsList>
    </MainIconsBox>
  );
};

export default MainIcons;

const MainIconsBox = styled.section`
  display: flex;
  justify-content: center;
`;

const IconsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 24px 13px;
  width: 60%;
  overflow: auto;
`;
const Icon = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  ${({ color }) => {
    return `background-color:${color};`;
  }}

  i {
    color: white;
  }
`;

const IconName = styled.span`
  display: flex;
  justify-content: center;
  font-size: 13px;
  line-height: 1.23;
  color: #525a61;
  margin-top: 8px;
`;
