import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import BookItem from './BookItem/BookItem';

const ORDER_LIST = [
  { id: 1, name: '인기순', order: null },
  { id: 2, name: '최신순', order: '0' },
  { id: 3, name: '할인', order: '1' },
  { id: 4, name: '대여', order: '2' },
];

const BookListForm = props => {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { bookList, viewDirection, allBooksLeng, addParams } = props;

  const paramsOrder = params.has('order') ? params.get('order') : '0';
  const paramsPage = params.has('page') ? params.get('page') : '1';

  const clickOrderBtn = order => {
    const nextParams = `?order=${order}&page=1`;
    history.push(location.pathname + nextParams + (addParams ? addParams : ''));
  };

  const clickPageBtn = page => {
    const nextParams = `?order=${paramsOrder}&page=${page}`;
    history.push(
      location.pathname + nextParams + (addParams ? `&${addParams}` : '')
    );
  };

  return (
    <>
      <OrderList>
        {ORDER_LIST.map(order => (
          <Order key={order.id}>
            <OrderBtn
              onClick={() => clickOrderBtn(order.order)}
              selected={paramsOrder === order.order}
            >
              {order.name}
            </OrderBtn>
          </Order>
        ))}
      </OrderList>
      <BooksWrapper viewDirection={viewDirection}>
        {bookList.map(book => (
          <BookItem
            key={book.book_id}
            book={book}
            viewDirection={viewDirection}
          />
        ))}
      </BooksWrapper>
      {Math.ceil(allBooksLeng / 20) > 1 && (
        <PagingWrapper>
          <PagingList>
            {[...Array(Math.ceil(allBooksLeng / 20))].map((i, idx) => (
              <NumberBtn
                key={idx}
                currentPage={paramsPage}
                onClick={() => clickPageBtn(idx + 1)}
              >
                {idx + 1}
              </NumberBtn>
            ))}
          </PagingList>
        </PagingWrapper>
      )}
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
  padding: 0 16px;
  height: 32px;
  border: 1px solid #d1d5d9;
  color: rgb(128, 137, 145);
  font-size: 13px;
  font-weight: 700;
  box-shadow: 0 1px 1px 0 rgb(210 210 210 / 30%);
  cursor: pointer;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  &:hover {
    background-color: #f2f4f5;
  }

  &:nth-child(${({ currentPage }) => currentPage}) {
    background-color: rgb(31, 140, 230);
    color: white;
  }
`;

export default BookListForm;
