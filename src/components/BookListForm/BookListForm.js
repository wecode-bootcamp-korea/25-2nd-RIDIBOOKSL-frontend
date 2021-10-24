import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookItem from './BookItem/BookItem';

const ORDER_LIST = [
  { id: 1, name: '인기순', order: '인기순' }, //order값은 나중에 고치기
  { id: 2, name: '최신순', order: '최신순' },
  { id: 3, name: '할인', order: '할인' },
  { id: 4, name: '대여', order: '대여' },
];

const BookListForm = props => {
  const { viewDirection } = props;
  const [selectedOrder, setSelectedOrder] = useState('인기순');
  const [currentPage, setCurrentPage] = useState(1);

  const leng = 78; //fetch받은 데이터 길이로 바꿈

  return (
    <>
      <OrderList>
        {ORDER_LIST.map(order => (
          <Order key={order.id}>
            <OrderBtn
              onClick={() => setSelectedOrder(order.order)}
              selected={selectedOrder === order.order}
            >
              {order.name}
            </OrderBtn>
          </Order>
        ))}
      </OrderList>
      <BooksWrapper viewDirection={viewDirection}>
        <BookItem viewDirection={viewDirection} />
        <BookItem viewDirection={viewDirection} />
        <BookItem viewDirection={viewDirection} />
        <BookItem viewDirection={viewDirection} />
        <BookItem viewDirection={viewDirection} />
        <BookItem viewDirection={viewDirection} />
        <BookItem viewDirection={viewDirection} />
      </BooksWrapper>
      <PagingWrapper>
        <PagingList>
          {[...Array(Math.ceil(leng / 20))].map((i, idx) => (
            <NumberBtn
              key={idx}
              currentPage={currentPage}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {/* {idx + 1} */}
              <Link to="/">{idx + 1}</Link>
            </NumberBtn>
          ))}
        </PagingList>
      </PagingWrapper>
    </>
  );
};

const OrderList = styled.ul`
  display: flex;
  padding: 12px 0;
`;

const Order = styled.li`
  &:first-child::before {
    display: none;
  }

  &::before {
    content: '';
    display: inline-block;
    margin: 0 7px 3px 7px;
    width: 3px;
    height: 3px;
    background-color: #d1d5d9;
    border-radius: 3px;
  }
`;

const OrderBtn = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  color: ${({ selected }) => (selected ? '#303538' : '#808991')};
  font-size: 13px;
  font-weight: 700;
  line-height: 1em;
  cursor: pointer;
`;

const BooksWrapper = styled.div`
  ${({ viewDirection }) =>
    viewDirection === 'column' &&
    'display: flex; justify-content: flex-start; flex-wrap: wrap;'}

  @media (max-width: 999px) {
    display: block;
  }
`;

const PagingWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const PagingList = styled.ul`
  display: flex;
  align-items: center;
`;

const NumberBtn = styled.li`
  display: flex;
  align-items: center;
  height: 32px;
  border: 1px solid #d1d5d9;
  box-shadow: 0 1px 1px 0 rgb(210 210 210 / 30%);

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  &:hover {
    background-color: #f2f4f5;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 100%;
    color: rgb(128, 137, 145);
    font-size: 13px;
    font-weight: 700;
  }

  &:nth-child(${({ currentPage }) => currentPage}) {
    background-color: rgb(31, 140, 230);

    a {
      color: white;
    }
  }
`;

export default BookListForm;
