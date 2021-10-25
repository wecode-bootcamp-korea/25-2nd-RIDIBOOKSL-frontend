import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AuthorItem from './AuthorItem/AuthorItem';
import BookListForm from '../../components/BookListForm/BookListForm';

const Search = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchWord = new URLSearchParams(params).get('keyword');

  const [authorList, setAuthorList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [isViewAuthorMore, setIsViewAuthorMore] = useState(false);
  const [allBooksLeng, setAllBooksLeng] = useState(0);

  const search_fetch_api = `http://10.58.1.63:8000/products/search?keyword=${searchWord}`;
  const bookList_param = params.get('order')
    ? `descending=${params.get('order')}&offset=${
        (params.get('page') - 1) * 20
      }&limit=20`
    : 'descending=0&offset=0&limit=20';
  const bookList_order_param = params.get('order')
    ? `descending=${params.get('order')}`
    : 'descending=0';

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch(`${search_fetch_api}&${bookList_order_param}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setAllBooksLeng(res.book_list.length);
      });

    fetch(`${search_fetch_api}&${bookList_param}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setAuthorList(res.author_list);
        setBookList(res.book_list);
      });
  }, [bookList_order_param, location, search_fetch_api, bookList_param]);

  return (
    <Background>
      <Container>
        <AuthorSection>
          <SectionTitle>
            '{searchWord}' 저자 검색 결과<span>총 {authorList.length}명</span>
          </SectionTitle>
          <Line />
          <AuthorList>
            {authorList.slice(0, 3).map(author => (
              <AuthorItem key={author.author_id} author={author} />
            ))}
            {isViewAuthorMore &&
              authorList
                .slice(3)
                .map(author => (
                  <AuthorItem key={author.author_id} author={author} />
                ))}
            {authorList.length > 3 && (
              <li>
                <ViewMoreBtn
                  onClick={() => setIsViewAuthorMore(!isViewAuthorMore)}
                >
                  {isViewAuthorMore ? (
                    <>
                      접기
                      <i className="fas fa-chevron-up" />
                    </>
                  ) : (
                    <>
                      {authorList.length - 3}명 더 보기
                      <i className="fas fa-chevron-down" />
                    </>
                  )}
                </ViewMoreBtn>
              </li>
            )}
          </AuthorList>
        </AuthorSection>
        <section>
          <SectionTitle>
            '{searchWord}' 도서 검색 결과<span>총 {bookList.length}종</span>
          </SectionTitle>
          <Line />
          <BookListForm
            bookList={bookList}
            viewDirection="row"
            allBooksLeng={allBooksLeng}
            addParams={`&keyword=${searchWord}`}
          />
        </section>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  margin: 20px 0 50px 0;

  a {
    text-decoration: none;
  }

  @media (max-width: 999px) {
    margin-top: 15px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1000px;

  @media (max-width: 999px) {
    padding: 0 10px;
  }
`;

const AuthorSection = styled.section`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: rgb(48, 53, 56);
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  word-break: break-all;

  span {
    margin-left: 5px;
    color: rgb(158, 167, 173);
    font-size: 13px;
    font-weight: 400;
  }
`;

const Line = styled.div`
  margin-top: 5px;
  height: 0;
  border-bottom: 2px solid #d1d5d9;
`;

const AuthorList = styled.ul`
  li:hover {
    background-color: rgb(247, 250, 252);
  }
`;

const ViewMoreBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 0;
  width: 100%;
  height: 46px;
  background-color: transparent;
  border: none;
  text-align: left;
  color: rgb(99, 108, 115);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  i {
    margin-left: 4px;
  }
`;

export default Search;
