import React, { useEffect } from 'react';
import styled from 'styled-components';
import LogBoxList from './LogBoxList/LogBoxList';

const LogBox = props => {
  const { logList, setLogList, isSaveLog, setIsSaveLog } = props;

  const toggleIsSaveLog = () => {
    setIsSaveLog(!isSaveLog);
  };

  useEffect(() => {
    localStorage.setItem('isSaveLog', isSaveLog);
  }, [isSaveLog]);

  const deleteAllLog = e => {
    e.stopPropagation();
    setLogList([]);
  };

  const selectShowBox = logList[0] ? (
    <LogBoxList logList={logList} setLogList={setLogList} />
  ) : (
    <Alarm>최근 검색어 내역이 없습니다.</Alarm>
  );

  return (
    <>
      <Title>최근 검색어</Title>
      {isSaveLog ? (
        selectShowBox
      ) : (
        <Alarm>
          <i className="fas fa-exclamation-circle" /> '검색어 저장 끄기'로
          설정되어 있습니다.
        </Alarm>
      )}
      <Button>
        <button onClick={toggleIsSaveLog}>
          검색어 저장 {isSaveLog ? '끄기' : '켜기'}
        </button>
        {isSaveLog && logList[0] ? (
          <button onClick={deleteAllLog}>전체 삭제</button>
        ) : (
          ''
        )}
      </Button>
    </>
  );
};

const Title = styled.p`
  padding: 12px 0 12px 16px;
  color: rgb(128, 137, 145);
`;

const Alarm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  color: rgb(158, 167, 173);

  i {
    margin-right: 2px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: rgb(242, 244, 245);
  border-radius: 0 0 3px 3px;

  button {
    padding: 0;
    border: none;
    color: rgb(64, 71, 77);
    opacity: 0.7;
    cursor: pointer;
  }
`;
export default LogBox;
