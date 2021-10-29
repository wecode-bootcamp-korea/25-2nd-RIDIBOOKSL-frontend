import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import API from '../../config';

const Profile = () => {
  const [data, setData] = useState([]);
  const [changeButton, setchangeButton] = useState(false);
  const { author_id, name, country, birthdate, info_update } = data;

  useEffect(() => {
    fetch(`${API.detail}`)
      // fetch('/data/DetailData.json')
      .then(res => res.json())
      .then(data => {
        setData(data.product_detail[0].author_info[0]);
      });
  }, []);

  const onSubscription = e => {
    setchangeButton(!changeButton);
    if (!changeButton) {
      alert(
        `'${data.name}'의 신간이 출간되면 알림, 푸시, 이메일로 알려드립니다.`
      );
      fetch(`${API.default}/subscribe?author_id=${author_id}`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      });
    } else {
      alert('신간알림에서 삭제되었습니다.');
    }
  };

  return (
    data && (
      <ProfileBox>
        <StyleLink to="/">{name}</StyleLink>
        <>
          {!changeButton && (
            <BlueButtonHover onClick={onSubscription}>
              <i className="fas fa-plus" />
              작가 신간알림·소식
            </BlueButtonHover>
          )}
          {changeButton && (
            <HiddenButton onClick={onSubscription}>
              <i className="fas fa-check" />
              작가 신간알림·소식 받는 중
            </HiddenButton>
          )}
        </>
        <ProfileListBox>
          <li>
            <span className="title">국적</span>
            <span className="content">{country}</span>
            <span className="title">출생</span>
            <span className="content">{birthdate}</span>
          </li>

          {PROFILE_LIST.map((profile, index) => {
            return (
              <li key={index}>
                <span className="title">{profile.title}</span>
                <span className="content">{profile.content}</span>
              </li>
            );
          })}
          <UpdateBox>
            <span>{info_update}</span>
            <span>업데이트</span>
            <button>
              <i className="fas fa-pen" />
              작가 프로필 수정 요청
            </button>
          </UpdateBox>
        </ProfileListBox>
      </ProfileBox>
    )
  );
};

export default Profile;

const PROFILE_LIST = [
  {
    title: '학력',
    content: '연세대학교 국문학 학사',
  },
  {
    title: '경력',
    content: '미국 아이오와대학교 국제창작프로그램',
  },
];

const StyleLink = styled(Link)``;

const ProfileBox = styled.div`
  margin: 30px 0;

  a {
    color: black;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;

    span {
      margin-left: 5px;
      color: #666;
      font-size: 14px;
    }
  }

  button {
    margin: 25px 0;
    width: 175px;
    height: 34px;

    i {
      margin-right: 4px;
    }
  }
`;

const ProfileListBox = styled.ul`
  font-size: 15px;
  line-height: 1.5em;

  .title {
    margin-right: 7px;
    color: gray;
  }

  .content {
    color: #666;
  }
`;

const UpdateBox = styled.p`
  text-align: right;
  border-bottom: 1px solid lightgray;
  font-size: 13px;

  span {
    margin-right: 5px;
    color: #9ea7ad;
  }

  button {
    margin-left: 5px;
    width: 150px;
    height: 23px;
    color: #808991;
    border: 1px solid lightgray;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
    font-size: 11px;

    &:hover {
      background-color: #dcdcdc;
    }
  }
`;

const ToggleButton = styled.button`
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
`;

const BlueButtonHover = styled(ToggleButton)`
  display: block;
  border: 1px solid #1f8ce6;
  font-weight: 600;
  color: #1f8ce6;

  &:hover {
    background-color: #ebfbff;
  }
`;

const HiddenButton = styled(ToggleButton)`
  display: block;
  border: 1px solid lightgray;
  font-size: 12px;
  color: #666;

  .fa-check {
    color: #5abf0d;
  }

  &:hover {
    background-color: rgb(239, 239, 239);
  }
`;
