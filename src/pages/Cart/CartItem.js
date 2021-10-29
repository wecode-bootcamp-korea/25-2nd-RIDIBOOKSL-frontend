import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CartItem = ({ book, allCheck, DeleteBook }) => {
  const { id, url, image, title, author, price } = book;
  const [check, setCheck] = useState(false);

  const buyBook = () => {
    setCheck(!check);
  };

  useEffect(() => {
    if (allCheck) {
      setCheck(true);
    }
  }, [allCheck]);

  return (
    <CartElement key={id}>
      <CartBookHeader>
        <BookHeaderCheck>
          <CheckBtn
            type="checkbox"
            onClick={buyBook}
            checked={check ? '1' : ''}
          />
        </BookHeaderCheck>
        <BookHeaderContent>
          <BookImg src={image} />
        </BookHeaderContent>
      </CartBookHeader>
      <CartBookBody>
        <TitleWrapper>
          <BookDescWrapper>
            <H>{title}</H>
            <Author>{author}</Author>
          </BookDescWrapper>
          <BookPriceWrapper>
            <Price>{`${price.toLocaleString()}원`}</Price>
          </BookPriceWrapper>
        </TitleWrapper>
        <WishBtn>
          <Li>
            <Button>위시리스트로 이동</Button>
          </Li>
          <Li>
            <Button
              onClick={() =>
                DeleteBook({ id, url, image, title, author, price, units: 1 })
              }
            >
              삭제
            </Button>
          </Li>
        </WishBtn>
      </CartBookBody>
    </CartElement>
  );
};

export default CartItem;

const CartElement = styled.div`
  width: 578px;
  height: 129px;
  display: flex;
  border-bottom: 1px solid #d1d5d9;

  &:first-child {
    border-top: 1px solid #d1d5d9;
  }
`;

const CartBookHeader = styled.div`
  width: 88px;
  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartBookBody = styled.div`
  width: 490px;
  height: 125px;
  padding: 10px 0 15px 0;
`;

const BookHeaderCheck = styled.div`
  position: relative;
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckBtn = styled.input`
  width: 23px;
  height: 23px;
`;

const BookHeaderContent = styled.div`
  width: 60px;
  height: 87px;
`;

const BookImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const BookDescWrapper = styled.div`
  width: 310px;
  height: 65px;
  border: 2px solid white;
  padding: 0 8px 15px 15px;
`;

const BookPriceWrapper = styled.div`
  width: 180px;
  height: 65px;
  display: flex;
  margin-right: 35px;
  justify-content: right;
  align-items: center;
  font-size: 14px;
  color: #1f8ce6;
`;

const WishBtn = styled.ul`
  width: 220px;
  height: 30px;
  padding: 0 0 0 15px;
  display: flex;
`;

const Li = styled.li`
  padding: 0 2px;
`;

const Button = styled.button`
  padding: 8px 18px;
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

const Price = styled.span`
  font-weight: bold;
`;

const H = styled.h3`
  margin: 3px 0 7px 0;
  font-size: 16px;
  color: #000;
  font-weight: 700;
`;

const Author = styled.span`
  font-size: 12px;
  color: #666;
  font-weight: 400;
`;
