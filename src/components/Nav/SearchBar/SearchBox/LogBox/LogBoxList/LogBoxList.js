import React from 'react';
import LogBoxItem from './LogBoxItem/LogBoxItem';

const LogBoxList = props => {
  const { logList, setLogList } = props;

  return (
    <ul>
      {logList.slice(0, 5).map((item, idx) => (
        <LogBoxItem
          key={idx}
          log={item}
          logList={logList}
          setLogList={setLogList}
        />
      ))}
    </ul>
  );
};

export default LogBoxList;
