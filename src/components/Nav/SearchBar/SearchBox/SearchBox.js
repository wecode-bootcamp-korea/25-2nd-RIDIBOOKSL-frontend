import React from 'react';
import styled from 'styled-components';
import LogBox from './LogBox/LogBox';
import MatchBox from './MatchBox/MatchBox';

const SearchBox = props => {
  const { searchWord, logList, setLogList, isSaveLog, setIsSaveLog } = props;

  return (
    <Box>
      {searchWord ? (
        <MatchBox searchWord={searchWord} />
      ) : (
        <LogBox
          logList={logList}
          setLogList={setLogList}
          isSaveLog={isSaveLog}
          setIsSaveLog={setIsSaveLog}
        />
      )}
    </Box>
  );
};

const Box = styled.div`
  position: absolute;
  margin-top: 2px;
  width: 380px;
  background-color: white;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 30%) 3px 3px 10px 3px;
  z-index: 1000;
  font-size: 14px;

  @media (max-width: 999px) {
    left: 0;
    margin-top: 6px;
    width: 100%;
    border-radius: 0;
  }
`;

export default SearchBox;
