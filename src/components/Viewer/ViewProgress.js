import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ViewProgress = ({ top, bottom }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue((top / bottom) * 100);
  }, [top, bottom, setValue]);

  return (
    <ProgressBox>
      <Progress percent={value} />
    </ProgressBox>
  );
};

export default ViewProgress;

const ProgressBox = styled.div`
  background-color: rgb(233, 233, 233);
  border-radius: 0.5rem;
`;

const Progress = styled.div`
  background-color: gray;
  height: 3px;
  border-radius: 1rem;
  width: ${props => `${props.percent}%`};
`;
