import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import ChargeBox from './ChargeBox';
import Check from './Check';
import { WISH_LIST } from './WishList';

const Cart = () => {
  const [allCheck, setAllCheck] = useState(false);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    setWishList(WISH_LIST);
  }, []);

  const buyAllBook = () => {
    setAllCheck(!allCheck);
  };

  const handleDeleteBook = product => {
    const existingProduct = wishList.filter(p => p.id !== product.id);
    setWishList(existingProduct);
  };

  let sum = 0;
  let totalCharge = 0;
  totalCharge = wishList.map(book => (sum += book.price));

  return (
    <CartBox>
      <CartArea>
        <CartSection>
          <CartTitle>카트</CartTitle>
          <CartWrapper>
            <CartTab>
              <CartTabWish>
                <A>구매하기</A>
              </CartTabWish>
              <CartTabBuy>
                <A>대여하기</A>
              </CartTabBuy>
            </CartTab>
            <Form>
              <BookWrapper>
                <Check
                  buyAllBook={buyAllBook}
                  checked={allCheck}
                  allCheck={allCheck}
                />
                <CartListBox>
                  {wishList.map((book, idx) => (
                    <CartItem
                      key={idx}
                      id_num={idx}
                      book={book}
                      allCheck={allCheck}
                      DeleteBook={handleDeleteBook}
                    />
                  ))}
                </CartListBox>
                <Check checkAll={buyAllBook} />
              </BookWrapper>
              <ChargeBox totalCharge={totalCharge} />
            </Form>
          </CartWrapper>
        </CartSection>
      </CartArea>
    </CartBox>
  );
};

export default Cart;

const CartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1680px;
  box-sizing: border-box;
`;

const CartArea = styled.div``;

const CartSection = styled.section`
  width: 952px;
  margin: 30px auto 100px auto;
`;

const CartTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  line-height: 1em;
  margin-bottom: 14px;
`;

const CartWrapper = styled.div``;

const CartTab = styled.ul`
  display: flex;
  width: 620px;
  height: 46px;
  border: 1px solid #d1d5d9;
  border-bottom: none;
`;

const CartTabWish = styled.li`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartTabBuy = styled.li`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f4f5;
  border-bottom: 1px solid #e6e8eb;
  box-sizing: border-box;
  border-left: 1px solid #e6e8eb;
`;

const A = styled(Link)`
  text-decoration: none;
  padding: 15px 0;
  font-size: 14px;
  font-weight: 700;
  color: #303538;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const BookWrapper = styled.article`
  width: 620px;
  border: 1px solid #d1d5d9;
  border-top: none;
`;

const CartListBox = styled.div`
  width: 100%;
  padding: 0 20px 0 20px;
`;
