import React from 'react';
import styled from 'styled-components';

const ChargeBox = ({ totalCharge }) => {
  return (
    <CashWrapper>
      <SummaryBox>
        <BuyTitle>
          <i class="fas fa-check-circle" />
          &nbsp;9권을 선택하셨습니다.
        </BuyTitle>
        <PriceBox>
          <Price>
            <PriceDesc>총 상품 금액</PriceDesc>
            <PriceDesc>{`${totalCharge[
              totalCharge.length - 1
            ]?.toLocaleString()}원`}</PriceDesc>
          </Price>
          <Price>
            <PriceDesc>할인 금액</PriceDesc>
            <PriceDesc>0원</PriceDesc>
          </Price>
        </PriceBox>
        <TotalPrice>
          <PriceDesc>합계</PriceDesc>
          <TotalDesc>{`${totalCharge[
            totalCharge.length - 1
          ]?.toLocaleString()}원`}</TotalDesc>
        </TotalPrice>
      </SummaryBox>
      <ButtonBox>
        <BuyBtn>선택 구매하기</BuyBtn>
      </ButtonBox>
    </CashWrapper>
  );
};

export default ChargeBox;

const CashWrapper = styled.article`
  position: sticky;
  top: 10px;
  width: 290px;
  height: 236px;
`;

const SummaryBox = styled.div`
  width: 290px;
  height: 169px;
  border: 1px solid #87b4e9;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 64px;
`;

const BuyBtn = styled.button`
  width: 100%;
  height: 54px;
  color: #fff;
  background: #1f8ce6;
  border: 1px solid #1f8ce6;
  box-shadow: 0 2px 4px 0 rgb(31 140 230 / 30%);
  border-radius: 4px;
`;

const BuyTitle = styled.p`
  padding: 20px 20px 0 20px;
  color: #5382b9;
  font-size: 12px;
  font-weight: 700;
`;

const Price = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 0 20px;
  color: #666;
  font-size: 12px;
`;

const PriceBox = styled.div`
  margin-bottom: 20px;
`;

const TotalPrice = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #ebf6ff;
`;

const PriceDesc = styled.span``;

const TotalDesc = styled(PriceDesc)`
  display: table-cell;
  vertical-align: middle;
  text-align: right;
  font-size: 20px;
  font-weight: 700;
  color: #1f8ce6;
`;
