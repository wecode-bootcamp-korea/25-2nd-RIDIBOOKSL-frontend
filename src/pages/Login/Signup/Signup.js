import React from 'react';
import styled from 'styled-components';
import SignupHeader from './SignupHeader';
import SignupBox from './SignupBox';

const Signup = () => {
  return (
    <SignupArea>
      <SignupHeader />
      <SignupBox />
    </SignupArea>
  );
};

export default Signup;

const SignupArea = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ebf6ff;
`;
