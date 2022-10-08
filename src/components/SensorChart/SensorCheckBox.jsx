import { useEffect } from 'react';
import styled from 'styled-components';

const SensorCheckBox = ({ checkedArray, setCheckedArray }) => {
  const radioHandler = (type, checkEl) => {
    const condition = {
      [type]: checkEl.currentTarget.value,
    };
    if (checkEl.currentTarget.checked) {
      setCheckedArray({ ...checkedArray, ...condition });
    } else if (!checkEl.currentTarget.checked && Object.keys(checkedArray).includes(type)) {
      let test = checkedArray;
      delete test[type];
      setCheckedArray(test);
    } else if (!checkEl.currentTarget.checked && !Object.keys(checkedArray).includes(type)) {
      return;
    }
  };

  useEffect(() => {
    console.log(checkedArray);
  }, [checkedArray]);

  return (
    <SensorCheckBoxBlock>
      <div className='margined'>
        <span>thingName</span>
        <div>
          <input name='thingName' type='radio' value='all' onChange={checkEl => radioHandler('thingName', checkEl)} defaultChecked />
          전체
          <input name='thingName' type='radio' value='FHL' onChange={checkEl => radioHandler('thingName', checkEl)} />
          FHL
          <input name='thingName' type='radio' value='FHS' onChange={checkEl => radioHandler('thingName', checkEl)} />
          FHS
        </div>
      </div>
      <div className='margined'>
        <span>batLvl</span>
        <div>
          <input name='batLvl' type='radio' value='all' onChange={checkEl => radioHandler('batLvl', checkEl)} defaultChecked />
          전체
          <input name='batLvl' type='radio' value='up' onChange={checkEl => radioHandler('batLvl', checkEl)} />
          20% 초과
          <input name='batLvl' type='radio' value='down' onChange={checkEl => radioHandler('batLvl', checkEl)} />
          20% 이하
        </div>
      </div>
      <div className='margined'>
        <span>ConnectionState</span>
        <div>
          <input name='ConnectionState' type='radio' value='all' onChange={checkEl => radioHandler('ConnectionState', checkEl)} defaultChecked />
          전체
          <input name='ConnectionState' type='radio' value='connect' onChange={checkEl => radioHandler('ConnectionState', checkEl)} />
          연결중
          <input name='ConnectionState' type='radio' value='disconnect' onChange={checkEl => radioHandler('ConnectionState', checkEl)} />
          연결해제됨
        </div>
      </div>
      <div className='margined'>
        <span>connCardNum</span>
        <div>
          <input name='connCardNum' type='radio' value='all' onChange={checkEl => radioHandler('connCardNum', checkEl)} defaultChecked />
          전체
          <input name='connCardNum' type='radio' value='1' onChange={checkEl => radioHandler('connCardNum', checkEl)} />
          1
          <input name='connCardNum' type='radio' value='0' onChange={checkEl => radioHandler('connCardNum', checkEl)} />0
        </div>
      </div>
      <div className='margined'>
        <span>remainData</span>
        <div>
          <input name='remainData' type='radio' value='all' onChange={checkEl => radioHandler('remainData', checkEl)} defaultChecked />
          전체
          <input name='remainData' type='radio' value='up' onChange={checkEl => radioHandler('remainData', checkEl)} />
          1000이상
        </div>
      </div>
      <div className='margined'>
        <span>fwVer</span>
        <div>
          <input name='fwVer' type='radio' value='all' onChange={checkEl => radioHandler('fwVer', checkEl)} defaultChecked />
          전체
          <input name='fwVer' type='radio' value='1.0.0' onChange={checkEl => radioHandler('fwVer', checkEl)} />
          1.0.0
          <input name='fwVer' type='radio' value='0.8.2' onChange={checkEl => radioHandler('fwVer', checkEl)} />
          0.8.2
        </div>
      </div>
      <div className='margined'>
        <span>hwVer</span>
        <div>
          <input name='hwVer' type='radio' value='all' onChange={checkEl => radioHandler('hwVer', checkEl)} defaultChecked />
          전체
          <input name='hwVer' type='radio' value='1.0.0' onChange={checkEl => radioHandler('hwVer', checkEl)} />
          1.0.0
          <input name='hwVer' type='radio' value='0.2.0' onChange={checkEl => radioHandler('hwVer', checkEl)} />
          0.2.0
        </div>
      </div>
    </SensorCheckBoxBlock>
  );
};

const SensorCheckBoxBlock = styled.div`
  .margined {
    margin-bottom: 10px;
  }
`;

export default SensorCheckBox;
