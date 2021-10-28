import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

const { Kakao } = window;

const KAKAO_LOGIN_API = 'http://10.58.4.245:8000/account/sign-in/kakao';

const SocialLogin = () => {
  Kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
  Kakao.Auth.login({
    scope: 'profile_nickname, profile_image, account_email',
    success: authObj => {
      fetch(`${KAKAO_LOGIN_API}`, {
        method: 'POST',
        headers: {
          Authorization: authObj.access_token,
        },
      })
        .then(res => res.json())
        .then(res => {
          localStorage.setItem('access_token', res.new_token);
          if (res.new_token) {
            alert('오늘도 즐거운 독서 하세요!');
            document.location.href = '/';
          } else {
            alert('다시 확인해주세요');
          }
        });
    },
    fail: function (err) {
      alert('로그인실패!');
    },
  });
};

const SocialLogOut = () => {
  if (Kakao.Auth.getAccessToken()) {
    localStorage.removeItem('access_token');
    Kakao.Auth.logout(() => {
      if (!localStorage.getItem('access_token')) {
        alert('로그아웃 성공!');
        document.location.href = '/';
      } else {
        alert('로그아웃실패');
      }
    });
  }
};

const SignupBox = () => {
  return (
    <Section>
      <InnerBox>
        <ImgBox>
          <Img src="./images/Login/books.jpg" />
        </ImgBox>
        <KakaoLoginBtn
          src="./images/Login/loginBtn.png"
          onClick={SocialLogin}
        />
        <Button
          onClick={SocialLogOut}
          isLogin={localStorage.getItem('access_token')}
        >
          로그아웃
        </Button>
      </InnerBox>
    </Section>
  );
};

export default withRouter(SignupBox);

const Section = styled.section`
  width: 360px;
  margin: 0 auto;
  padding: 60px 0 70px;
`;

const InnerBox = styled.div`
  padding: 30px 10px;
`;

const ImgBox = styled.div`
  margin: 20px;
`;

const Img = styled.img`
  width: 300px;
  height: 232px;
  object-fit: cover;
  border-radius: 4px;
`;

const KakaoLoginBtn = styled.img`
  width: 100%;
  height: 50px;
  margin: 5px 0;

  &:hover {
    opacity: 0.7;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  margin: 5px 0;
  font: 'Font Name';
  font-weight: 400;
  border: none;
  border-radius: 4px;
  background-color: #1f8cb6;
  color: white;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 2px 4px 0 rgb(31 140 230 / 30%);

  ${props => (props.isLogin ? '' : 'display : none;')};

  &:hover {
    opacity: 0.7;
  }
`;
