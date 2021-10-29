import React, { useState } from 'react';
import styled from 'styled-components';

const Text = () => {
  const [isButtonClick, setIsButtonClick] = useState(false);

  const onToggleButton = e => {
    setIsButtonClick(!isButtonClick);
  };

  return (
    <IntroduceTextBox>
      <IntroduceText>
        <p>
          무엇을 생각하면 견딜 수 있나.
          <br />
          가슴에 활활 일어나는 불이 없다면.
          <br />
          기어이 돌아가 껴안을 네가 없다면.
          <br />
          <br />
          이곳에 살았던 이들로부터, 이곳에 살아 있는 이들로부터 <br />
          꿈처럼 스며오는 지극한 사랑의 기억 <br />
          2016년 『채식주의자』로 인터내셔널 부커상을 수상하고 2018년 『흰』으로
          같은 상 최종 후보에 오른 한강 작가의 5년 만의 신작 장편소설 <br />
          『작별하자』가 출간되었다. 2019년 겨울부터 이듬해 봄까지 계간
          『문학동네』에 전반부를 연재하면서부터 큰 관심을 모았고, 그뒤 일
          년여에 걸쳐 후반부를 <br />
        </p>
        {/* 숨기기 */}
        <ButtonOn
          className="hiddenButton"
          onClick={onToggleButton}
          buttonShow={!isButtonClick}
        >
          펼쳐보기 <i className="fas fa-chevron-circle-down" />
        </ButtonOn>

        {/* 나타내기 */}
        {isButtonClick && (
          <>
            <span>
              집필하고 또 전체를 공들여 다듬는 지난한 과정을 거쳐 완성되었다.
              본래 「눈 한 송이가 녹는 동안」(2015년 황순원문학상 수상작),
              「작별」(2018년 <br />
              김유정문학상 수상작)을 잇는 ‘눈’ 3부작의 마지막 작품으로
              구상되었으나 그 자체 완결된 작품의 형태로 엮이게 된바, 한강 작가의
              문학적 궤적에서 <br />
              『작별하자』가 지니는 각별한 의미를 짚어볼 수 있다. 이로써
              『소년이 온다』(2014), 『흰』(2016), ‘눈’ 연작(2015, 2017) 등
              근작들을 통해 어둠
              <br />
              속에서도 한줄기 빛을 향해 나아가는 인간의 고투와 존엄을 그려온
              한강 문학이 다다른 눈부신 현재를 또렷한 모습으로 확인할 수 있게
              되었다. <br />
              오래지 않은 비극적 역사의 기억으로부터 길어올린, 그럼에도 인간을
              끝내 인간이게 하는 간절하고 지극한 사랑의 이야기가 눈이 시리도록
              선연한 이미지와 <br />
              유려하고 시적인 문장에 실려 압도적인 아름다움으로 다가온다.
            </span>
            <ButtonOff onClick={onToggleButton}>
              접기
              <i className="fas fa-chevron-circle-up" />
            </ButtonOff>
          </>
        )}
      </IntroduceText>
    </IntroduceTextBox>
  );
};

export default Text;

const IntroduceTextBox = styled.div`
  margin: 30px 0 80px 0;
`;

const ButtonStyle = styled.button`
  float: right;
  color: #4076b5;
  border: none;
  cursor: pointer;
  background-color: white;
  font-size: 14px;

  i {
    margin-left: 3px;
    font-size: 16px;
  }
`;

const IntroduceText = styled.div`
  line-height: 1.8em;
  font-size: 15px;
  color: #666;
  height: ${({ isButtonClick }) => (isButtonClick ? `190px` : `100%`)};
  overflow: hidden;
`;

const ButtonOn = styled(ButtonStyle)`
  ${({ buttonShow }) => {
    return buttonShow ? `display:block` : `display: none`;
  }}
`;

const ButtonOff = styled(ButtonStyle)`
  ${({ buttonShow }) => {
    return buttonShow ? 'display: none' : 'display: block';
  }};
`;
