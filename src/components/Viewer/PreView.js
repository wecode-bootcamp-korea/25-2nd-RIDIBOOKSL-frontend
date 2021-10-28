import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import PreViewBox from './PreViewBox';

const PreView = () => {
  const [show, setShow] = useState(false);

  const ViewerHandler = () => {
    setShow(show => !show);
    return show;
  };

  return (
    <>
      <Div>
        <Button onClick={ViewerHandler}>첫화 미리보기</Button>
      </Div>
      {show && <PreViewBox ViewerHandler={ViewerHandler} Show={show} />}
    </>
  );
};

export default PreView;

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

const Button = styled.button`
  width: 300px;
  height: 300px;
  margin-right: 10px;
  background: #3f51b5;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 1px #ccc;
`;
