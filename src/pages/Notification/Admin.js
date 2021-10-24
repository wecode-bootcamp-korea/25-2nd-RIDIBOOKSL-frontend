import React, { useState } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';

const socket = io('http://localhost:4001/');

const Admin = () => {
  const [noti, setNoti] = useState({
    user: '',
    img: '',
    message: '',
    url: '',
  });

  const btnClick = () => {
    socket.emit('roomjoin', noti.user);
    socket.emit('noti', noti);
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setNoti({ ...noti, [name]: value });
  };

  return (
    <Form>
      <div>
        <input name="user" placeholder="유저 토큰" onChange={handleInput} />
        <input name="img" placeholder="이미지 링크" onChange={handleInput} />
        <input name="message" placeholder="메시지" onChange={handleInput} />
        <input name="url" placeholder="이동 url" onChange={handleInput} />
        <button onClick={() => btnClick()}>알림 보내기</button>
      </div>
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    width: 300px;

    & > * {
      width: 100%;
      height: 35px;
    }

    input {
      margin-bottom: 10px;
    }

    button {
      cursor: pointer;
    }
  }
`;

export default Admin;
