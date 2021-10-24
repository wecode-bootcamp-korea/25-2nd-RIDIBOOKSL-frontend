import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const elapsedTime = notiTime => {
  const currentTime = new Date();
  const elapsedSeconds = Math.floor((currentTime - notiTime) / 1000);
  const elapsedMinutes = Math.floor((currentTime - notiTime) / 60000);
  const elapsedHours = Math.floor((currentTime - notiTime) / 3600000);
  const elapsedDate = Math.floor((currentTime - notiTime) / 86400000);

  if (elapsedSeconds < 60) return `${elapsedSeconds}초 전`;
  if (elapsedMinutes < 60 && elapsedMinutes > 0)
    return `${elapsedMinutes}분 전`;
  if (elapsedHours < 12 && elapsedHours > 0) return `${elapsedHours}시간 전`;
  if (elapsedDate > 0) return `${elapsedDate}일 전`;
};

const NotiItem = ({ noti }) => {
  return (
    <NotiWrapper>
      <Noti to={`${noti.url}`}>
        <Thumbnail>
          <img src={`${noti.img}`} alt="책 표지" />
        </Thumbnail>
        <Notice>
          <Text>{noti.message}</Text>
          <Time>{elapsedTime(new Date(noti.date))}</Time>
        </Notice>
        <Icon>
          <i className="fas fa-chevron-right" />
        </Icon>
      </Noti>
    </NotiWrapper>
  );
};

const NotiWrapper = styled.li`
  border-bottom: 1px solid rgb(230, 232, 235);

  &:hover {
    background-color: rgb(247, 250, 252);
  }
`;

const Noti = styled(Link)`
  display: flex;
  align-items: center;
  padding: 14px 10px 14px 0;
  color: rgb(48, 53, 56);
  text-decoration: none;
`;

const Thumbnail = styled.div`
  display: flex;
  width: 56px;
  min-width: 56px;

  img {
    width: 100%;
  }
`;

const Notice = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 16px;
`;

const Text = styled.p`
  margin-bottom: 3px;
  font-weight: 700;
  line-height: 1.53em;
  word-break: keep-all;
`;

const Time = styled.span`
  color: rgb(128, 137, 145);
`;

const Icon = styled.div`
  color: rgb(158, 167, 173);
`;

export default NotiItem;
