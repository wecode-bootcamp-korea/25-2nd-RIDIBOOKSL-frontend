import React, { useState, useEffect } from 'react';
import MainSlider from './component/MainSlider';
import MainIcons from './component/MainIcons';
import MainNowRelease from './component/MainNowRelease';
import CurrentTime from './component/CurrentTime';
import MainBookSlider from './component/MainBookSlider';
import MainBookList from './component/MainBookList';

const Main = () => {
  const [bookBox, setbookBox] = useState([]);
  const [newBook, setnewBook] = useState([]);
  const currentHour = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
  });

  const currentMinute = new Date().toLocaleTimeString('en-US', {
    minute: 'numeric',
  });

  const Title = [
    '리디북실에서 방금 나온 신간!',
    '북슬이들이 지금 많이 읽고 있는 책',
    '오늘, 북슬이의 발견',
    '베스트셀러',
    '금주의 신간',
    '북슬이 인별 추천도서',
  ];

  useEffect(() => {
    fetch('/data/MainData/MainBookData.json')
      .then(res => res.json())
      .then(bookBox => setbookBox(bookBox));
  }, []);

  useEffect(() => {
    fetch('/data/MainData/MainNowReleaseData.json')
      .then(res => res.json())
      .then(newBook => setnewBook(newBook));
  }, []);

  return (
    <>
      <MainSlider />
      <MainIcons />
      <MainNowRelease Title={Title[0]} newBook={newBook.Release} />
      <CurrentTime currentHour={currentHour} currentMinute={currentMinute} />
      <MainBookList Title={Title[1]} bookBox={bookBox.ReadList} />
      <MainBookSlider Title={Title[2]} bookBox={bookBox.Find} />
      <MainBookList Title={Title[3]} bookBox={bookBox.BestSeller} />
      <MainBookSlider Title={Title[4]} bookBox={bookBox.NewList} />
      <MainBookSlider Title={Title[5]} bookBox={bookBox.Recommend} />
    </>
  );
};

export default Main;
