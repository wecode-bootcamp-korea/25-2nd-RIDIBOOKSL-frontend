import React from 'react';
import styled from 'styled-components';

const Genre = props => {
  return props.spec?.map((s, idx) => <Li key={idx}>{s}</Li>);
};

export default Genre;

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

  .genre:hover {
    color: blue;
  }
`;
