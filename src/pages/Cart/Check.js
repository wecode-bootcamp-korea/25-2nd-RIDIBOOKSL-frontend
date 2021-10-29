import React from 'react';
import styled from 'styled-components';

const Check = ({ buyAllBook, allCheck }) => {
  return (
    <AllCheck>
      <TotalCheck>
        <BookHeaderCheck>
          <CheckBtn
            type="checkbox"
            onClick={buyAllBook}
            checked={allCheck ? '1' : ''}
          />
        </BookHeaderCheck>
        &nbsp;전체 선택
      </TotalCheck>
      <WishBtn>
        <Li>
          <Button>선택 위시리스트로 이동</Button>
        </Li>
        <Li>
          <Button>선택 삭제</Button>
        </Li>
      </WishBtn>
    </AllCheck>
  );
};

export default Check;

const AllCheck = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalCheck = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 20px;
  font-size: 13px;
  font-weight: 700;
  color: #636c73;
`;

const BookHeaderCheck = styled.div`
  position: relative;
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #1f8ce6; */
`;

const CheckBtn = styled.input`
  width: 23px;
  height: 23px;
`;

const WishBtn = styled.ul`
  width: 250px;
  height: 30px;
  padding: 0 0 0 15px;
  margin-right: 20px;
  display: flex;
`;

const Li = styled.li`
  padding: 0 2px;
`;

const Button = styled.button`
  padding: 8px 10px;
  border: 1px solid #d1d5d9;
  color: #808991;
  font-size: 12px;
  background: #fff;
  outline: 0;
  border-radius: 4px;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  line-height: 1em;
  vertical-align: baseline;
`;
