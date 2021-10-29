import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import API from '../../config';
import BookListForm from '../../components/BookListForm/BookListForm';

const Author = () => {
  const { id } = useParams();

  const [bookList, setBookList] = useState([]);
  const [authorInfo, setAuthorInfo] = useState({});
  const [allBooksLeng, setAllBooksLeng] = useState(0);

  const bookList_fetch_api = `${API.author}/${id}`;

  useEffect(() => {
    fetch(`${bookList_fetch_api}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setAuthorInfo(res.author_info);
        setBookList(res.author_books);
        setAllBooksLeng(res.author_books.length);
      });
  }, [bookList_fetch_api]);

  return (
    <Background>
      <Container>
        <AuthorSection>
          <Name>{authorInfo.author_name}</Name>
          <SubscribeBtn>
            <i className="fas fa-plus" />
            작가 신간알림 · 소식
          </SubscribeBtn>
          <ul>
            <ProfileItem>
              <Tag>국적</Tag>
              <span>{authorInfo.author_country}</span>
            </ProfileItem>
            <ProfileItem>
              <Tag>출생</Tag>
              <span>{authorInfo.author_birthdate}년</span>
            </ProfileItem>
          </ul>
        </AuthorSection>
        <BookSection>
          <BookLength>총 {allBooksLeng}종</BookLength>
          <BookListForm
            bookList={bookList}
            viewDirection="row"
            allBooksLeng={allBooksLeng}
          />
        </BookSection>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  margin: 30px 0 50px 0;
  font-size: 13px;

  a {
    text-decoration: none;
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
  margin-bottom: 26px;
  padding: 20px;
  border: 10px solid #eee;
`;

const Name = styled.h4`
  color: #333333;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3em;
  word-break: break-all;
`;

const SubscribeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  padding: 8px;
  min-width: 168px;
  background-color: transparent;
  border: 1px solid #1f8ce6;
  border-radius: 4px;
  color: #1f8ce6;
  font-size: 12px;
  font-weight: 700;
  line-height: 1em;
  box-shadow: 0 1px 1px 0 rgb(31 140 230 / 30%);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #ebf6ff;
  }

  i {
    margin-right: 4px;
  }
`;

const ProfileItem = styled.li`
  span {
    line-height: 1.8em;
  }
`;

const Tag = styled.span`
  margin-right: 8px;
  color: #808991;
`;

const BookSection = styled.section`
  & > ul {
    display: none;
  }
`;

const BookLength = styled.h4`
  margin-bottom: 5px;
  color: #333;
  font-size: 16px;
  font-weight: 700;
`;

export default Author;
