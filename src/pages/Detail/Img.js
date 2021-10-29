import React, { useState } from 'react';
import styled from 'styled-components';
import PreViewBox from '../../components/Viewer/PreViewBox';

const Img = ({ ImgData }) => {
  const [changeView, setChangeView] = useState(false);

  const isviewClick = e => {
    setChangeView(!changeView);
  };

  const [show, setShow] = useState(false);

  const ViewerHandler = () => {
    setShow(show => !show);
    return show;
  };

  return (
    <>
      <ImgBox>
        <button className="bookImgButton" onClick={isviewClick}>
          <img alt="bookImg" src={ImgData} className="bookImg" />
        </button>
        <BlueButtonHover className="view" onClick={ViewerHandler}>
          <i className="fas fa-book" />
          미리보기
        </BlueButtonHover>
      </ImgBox>
      {changeView && (
        <HiddenWrapper>
          <div className="hiddenBox">
            <button onClick={isviewClick}>
              <i className="fas fa-times" />
            </button>
            <img alt="hiddenImg" src={ImgData} />
          </div>
        </HiddenWrapper>
      )}
      {show && <PreViewBox ViewerHandler={ViewerHandler} Show={show} />}
    </>
  );
};

export default Img;

//왼쪽 img 박스
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .bookImgButton {
    border: none;
    background-color: white;
  }

  .bookImg {
    width: 220px;
    height: 320px;
    cursor: zoom-in;
  }

  .fa-book {
    margin-right: 3px;
  }

  .view {
    margin-top: 12px;
    width: 135px;
    height: 45px;
    font-size: 14px;
  }
`;

const BlueButtonHover = styled.button`
  background-color: white;
  border: 1px solid #1f8ce6;
  border-radius: 5px;
  font-weight: 600;
  color: #1f8ce6;
  cursor: pointer;

  &:hover {
    background-color: #ebfbff;
  }
`;

const HiddenWrapper = styled.figure`
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  background-color: rgba(40, 40, 40, 0.8);
  z-index: 9900;

  .hiddenBox {
    position: relative;
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    width: 500px;
    height: 770px;
    margin: 0 auto;
  }

  button {
    position: absolute;
    right: 0;
    color: lightgray;
    padding-top: 10px;
    padding-right: 6px;
    border: none;
    background-color: transparent;
    cursor: zoom-out;
    font-size: 18px;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    line-height: 0;
    padding: 40px 0 40px;
    margin: 0 auto;
  }
`;
