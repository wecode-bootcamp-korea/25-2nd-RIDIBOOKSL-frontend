import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import SearchBox from './SearchBox/SearchBox';

const SearchBar = () => {
  const history = useHistory();
  const focusedArea = useRef();

  const [isBoxShow, setIsBoxShow] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [logList, setLogList] = useState(
    localStorage.getItem('searchLog')
      ? localStorage.getItem('searchLog').split(',')
      : []
  );
  const [isSaveLog, setIsSaveLog] = useState(
    localStorage.getItem('isSaveLog') !== null
      ? localStorage.getItem('isSaveLog') === 'true'
      : true
  );

  const showBox = () => {
    setIsBoxShow(true);
  };

  useEffect(() => {
    const handleCloseBox = e => {
      if (isBoxShow && !focusedArea.current.contains(e.target)) {
        setIsBoxShow(false);
      }
    };

    window.addEventListener('click', handleCloseBox);
    return () => {
      window.removeEventListener('click', handleCloseBox);
    };
  }, [isBoxShow]);

  const handleSearchWord = e => {
    setSearchWord(e.target.value);
  };

  const handlePressEnter = e => {
    if (searchWord && e.key === 'Enter') {
      isSaveLog &&
        setLogList(
          [searchWord].concat(logList.filter(log => log !== searchWord))
        );
      setIsBoxShow(false);
      history.push('/search');
    }
  };

  useEffect(() => {
    localStorage.setItem('searchLog', logList);
  }, [logList]);

  const cleanSearchWord = () => {
    setSearchWord('');
  };

  return (
    <BarWrap isBoxShow={isBoxShow}>
      <Bar ref={focusedArea} isBoxShow={isBoxShow}>
        {isBoxShow && (
          <BackBtn onClick={() => setIsBoxShow(false)}>
            <i className="fas fa-arrow-left" />
          </BackBtn>
        )}
        <LabelWrap isBoxShow={isBoxShow}>
          <label onClick={showBox}>
            <i className="fas fa-search" />
            <input
              type="text"
              value={searchWord}
              placeholder="제목, 저자, 출판사 검색"
              onChange={handleSearchWord}
              onKeyPress={handlePressEnter}
            />
            {searchWord && (
              <button onClick={cleanSearchWord}>
                <i className="fas fa-times-circle" />
              </button>
            )}
          </label>
          {isBoxShow && (
            <SearchBox
              searchWord={searchWord}
              logList={logList}
              setLogList={setLogList}
              isSaveLog={isSaveLog}
              setIsSaveLog={setIsSaveLog}
            />
          )}
        </LabelWrap>
      </Bar>
    </BarWrap>
  );
};

const BarWrap = styled.div`
  flex: 1;
  max-width: 340px;
  order: 2;
  z-index: 1000;

  @media (max-width: 999px) {
    flex-basis: 100%;
    order: 3;
    margin: 9px 0;
    max-width: 100%;
    ${({ isBoxShow }) =>
      isBoxShow &&
      'position: fixed; margin: 0; background-color: rgba(0, 0, 0, 0.5); inset: 0;'}
  }
`;

const Bar = styled.div`
  @media (max-width: 999px) {
    ${({ isBoxShow }) =>
      isBoxShow &&
      'display: flex; padding: 6px; background-color: rgb(31, 140, 230)'}
  }
`;

const BackBtn = styled.button`
  display: none;
  padding: 0px 10px 0px 5px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;

  @media (max-width: 999px) {
    display: block;
  }
`;

const LabelWrap = styled.div`
  label {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 3px;

    i {
      margin: 0 6px 0 10px;
      color: #b3b8bd;
      font-size: 18px;
    }

    input {
      flex: 1;
      height: 36px;
      border: none;
      border-radius: 3px;
      font-size: 16px;
      line-height: 16px;

      &:focus {
        outline: none;
      }
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;

      i {
        margin: 5px;
        color: rgb(158, 167, 173);
        font-size: 14px;
      }
    }
  }

  @media (max-width: 999px) {
    ${({ isBoxShow }) => isBoxShow && 'flex: 1'}
  }
`;

export default SearchBar;
