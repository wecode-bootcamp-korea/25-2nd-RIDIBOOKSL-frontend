import React, { useState, useEffect } from 'react';
import SubMenu from './component/SubMenu';
import MainSlider from './component/MainSlider';
import MainIcons from './component/MainIcons';
import MainNowRelease from './component/MainNowRelease';
import CurrentTime from './component/CurrentTime';
import MainBookSlider from './component/MainBookSlider';
import MainBookList from './component/MainBookList';

const Main = () => {
  const [bookBox, setBookBox] = useState([]);
  const [newBook, setnewBook] = useState([]);
  const [time, setTime] = useState(0);

  const getTime = () => {
    const current = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    setTime(current);
  };

  useEffect(() => {
    setInterval(getTime, 1000);
    return () => {
      setInterval(getTime, 1000);
    };
  }, []);

  const Title = [
    '리디북실에서 방금 나온 신간!',
    '북슬이들이 지금 많이 읽고 있는 책',
    '오늘, 북슬이의 발견',
    '베스트셀러 >',
    '금주의 신간',
    '북슬이 인별 추천도서 >',
  ];

  useEffect(() => {
    fetch('/data/MainData/MainNowReleaseData.json')
      .then(res => res.json())
      .then(newBook => setnewBook(newBook));
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.1.63:8000/products/main')
  //     .then(res => res.json())
  //     .then(bookBox => setBookBox(bookBox));
  // }, []);

  return (
    <>
      <SubMenu />
      <MainSlider />
      <MainIcons />
      <MainNowRelease title={Title[0]} newBook={newBook.Release} />
      <CurrentTime
        hour={time.toLocaleString().split(':')[0]}
        min={time.toLocaleString().split(':')[1]}
      />
      <MainBookList title={Title[1]} bookData={bookBox.daily_best} />
      <MainBookSlider Title={Title[2]} bookData={newBook.Find} />
      <MainBookList title={Title[3]} bookData={bookBox.best_seller} />
      <MainBookSlider title={Title[4]} bookData={bookBox.new_books} />
      <MainBookSlider title={Title[5]} bookData={newBook.Recommend} />
    </>
  );
};

export default Main;
