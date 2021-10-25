import React from 'react';
import styled from 'styled-components';

const CurrentTime = ({ hour, min }) => {
  return (
    <TimeBox>
      <div>
        <i className="fas fa-clock" />
        {hour && min && ` ${hour}시 ${min}분`}
      </div>
    </TimeBox>
  );
};

export default CurrentTime;

const TimeBox = styled.section`
  margin: 0 auto;
  margin-top: 2%;
  width: 964px;
  div {
    border: 1px solid;
    width: 10%;
    padding: 1%;
    border-radius: 60px;
    color: white;
    font-size: 13px;
    font-weight: bold;
    background-image: linear-gradient(255deg, #0077d9 4%, #72d2e0);
  }
`;
