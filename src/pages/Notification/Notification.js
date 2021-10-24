import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NotiItem from './NotiItem/NotiItem';
import io from 'socket.io-client';

const socket = io('http://localhost:4001/');

const Notification = () => {
  const userToken = localStorage.getItem('access_token');
  const [notiList, setNotiList] = useState([]);

  useEffect(() => {
    fetch('/data/NotiExData.json').then(res =>
      res.json().then(data => setNotiList(data))
    );
  }, []);

  useEffect(() => {
    socket.emit('roomjoin', userToken);
    socket.on('noti', noti => {
      setNotiList(
        [
          {
            img: noti.img,
            message: noti.message,
            url: noti.url,
            date: new Date(),
          },
        ].concat(notiList)
      );
    });
  }, [notiList, userToken]);

  return (
    <Container>
      <PageTitle>알림</PageTitle>
      <NotiList>
        {notiList.map((noti, idx) => (
          <NotiItem key={idx} noti={noti} />
        ))}
      </NotiList>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 0 20px;
  max-width: 1000px;
  min-height: 620px;

  @media (max-width: 999px) {
    padding: 0 10px;
  }
`;

const PageTitle = styled.h2`
  padding: 15px 0;
  color: #303538;
  font-size: 22px;
  font-weight: 700;

  @media (max-width: 999px) {
    display: none;
  }
`;

const NotiList = styled.ul``;

export default Notification;
