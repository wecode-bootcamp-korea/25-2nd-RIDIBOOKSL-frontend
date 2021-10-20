import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogBoxItem = props => {
  const { log, logList, setLogList } = props;

  const deleteLog = e => {
    e.stopPropagation();
    setLogList(logList.filter(item => item !== log));
  };

  return (
    <Item>
      <Link to="/">{log}</Link>
      <button onClick={deleteLog}>
        <i className="fas fa-times" />
      </button>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgb(247, 250, 252);
  }

  a {
    flex: 1;
    padding: 14px 16px;
    color: rgb(48, 53, 56);
    font-size: 15px;
    line-height: 1.33;
  }

  button {
    width: 42px;
    height: 42px;
    background-color: transparent;
    border: none;
    color: rgb(209, 213, 217);
    cursor: pointer;
  }
`;

export default LogBoxItem;
