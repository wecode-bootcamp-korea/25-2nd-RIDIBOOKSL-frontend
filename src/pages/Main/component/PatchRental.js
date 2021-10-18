import React from 'react';
import styled from 'styled-components';

const PatchRental = () => {
  return (
    <PatchBox>
      <Patch>대여</Patch>
    </PatchBox>
  );
};

export default PatchRental;

const PatchBox = styled.div`
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 34px;
  line-height: 0;
  top: 2%;
  left: 5px;
  width: 34px;
  height: 34px;
  background-color: #3ea590;
`;

const Patch = styled.span`
  position: absolute;
  display: block;
  margin-top: -6px;
  text-align: center;
  top: 50%;
  width: 100%;
  line-height: 16px;
  color: white;
  font-weight: bold;
`;
