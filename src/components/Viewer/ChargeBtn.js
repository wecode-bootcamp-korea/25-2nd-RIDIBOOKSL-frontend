import React from 'react';
import styled from 'styled-components';

const ChargeBtn = ({ title }) => {
  const isMember = e => {
    if (e.target.value === '4') alert('결제가 필요한 컨텐츠입니다.');
  };

  return (
    <SideList canSee="no" value="4" onClick={isMember}>
      {title}장
    </SideList>
  );
};

export default ChargeBtn;

const SideList = styled.button`
  width: 100%;
  height: 6%;
  border: none;
  border-bottom: 1px solid #dadada;
  padding-left: 20px;
  text-align: left;
  margin: 0;
  box-shadow: none;
  background-color: #eeeeee;
  color: #dadada;
  cursor: pointer;
`;
