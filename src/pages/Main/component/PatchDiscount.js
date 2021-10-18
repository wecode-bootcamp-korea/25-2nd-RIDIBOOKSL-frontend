import React from 'react';
import styled from 'styled-components';

const PatchDiscount = () => {
  return (
    <PatchBox>
      <Patch>
        <span className="number">10</span>
        <span className="percent">%</span>
      </Patch>
    </PatchBox>
  );
};

export default PatchDiscount;

const PatchBox = styled.div`
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 34px;
  line-height: 0;
  top: 2%;
  left: 5px;
  width: 34px;
  height: 34px;
  background: #59667a;
`;

const Patch = styled.p`
  position: absolute;
  margin-top: -6px;
  text-align: center;
  top: 50%;
  width: 100%;
  line-height: 16px;
  color: white;
  font-weight: bold;

  .number {
    padding-right: 1px;
    font-size: 16px;
  }

  .percent {
    font-size: 10px;
  }
`;
