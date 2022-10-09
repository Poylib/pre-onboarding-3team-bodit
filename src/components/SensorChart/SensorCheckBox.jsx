import styled from 'styled-components';
import Nav from '../nav/Nav';
import { blue } from '../../theme';

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

  return (
    <Nav>
      <SensorCheckBoxBlock>
        <div className='scroll'>
          <div className='margined'>
            <span>Sensor ID</span>
            <div className='InputBox'>
              <div>
                <input name='thingName' type='radio' value='all' onChange={checkEl => radioHandler('thingName', checkEl)} defaultChecked />
                <span>전체</span>
              </div>
              <div>
                <input name='thingName' type='radio' value='FHL' onChange={checkEl => radioHandler('thingName', checkEl)} />
                <span>FHL</span>
              </div>
              <div>
                <input name='thingName' type='radio' value='FHS' onChange={checkEl => radioHandler('thingName', checkEl)} />
                <span>FHS</span>
              </div>
            </div>
          </div>
          <div className='margined'>
            <span>Bat.(%)</span>
            <div className='InputBox'>
              <div>
                <input name='batLvl' type='radio' value='all' onChange={checkEl => radioHandler('batLvl', checkEl)} defaultChecked />
                <span>전체</span>
              </div>
              <div>
                <input name='batLvl' type='radio' value='up' onChange={checkEl => radioHandler('batLvl', checkEl)} />
                <span>20% 초과</span>
              </div>
              <div>
                <input name='batLvl' type='radio' value='down' onChange={checkEl => radioHandler('batLvl', checkEl)} />
                <span>20% 이하</span>
              </div>
            </div>
          </div>
          <div className='margined'>
            <span>Connection State</span>
            <div className='InputBox'>
              <div>
                <input name='ConnectionState' type='radio' value='all' onChange={checkEl => radioHandler('ConnectionState', checkEl)} defaultChecked />
                <span>전체</span>
              </div>
              <div>
                <input name='ConnectionState' type='radio' value='connect' onChange={checkEl => radioHandler('ConnectionState', checkEl)} />
                <span>연결중</span>
              </div>
              <div>
                <input name='ConnectionState' type='radio' value='disconnect' onChange={checkEl => radioHandler('ConnectionState', checkEl)} />
                <span>연결해제됨</span>
              </div>
            </div>
          </div>
          <div className='margined'>
            <span>Card No.</span>
            <div className='InputBox'>
              <div>
                <input name='connCardNum' type='radio' value='all' onChange={checkEl => radioHandler('connCardNum', checkEl)} defaultChecked />
                <span>전체</span>
              </div>
              <div>
                <input name='connCardNum' type='radio' value='1' onChange={checkEl => radioHandler('connCardNum', checkEl)} />
                <span>1</span>
              </div>
              <div>
                <input name='connCardNum' type='radio' value='0' onChange={checkEl => radioHandler('connCardNum', checkEl)} />
                <span>0</span>
              </div>
            </div>
          </div>
          <div className='margined'>
            <span>Remain</span>
            <div className='InputBox'>
              <div>
                <input name='remainData' type='radio' value='all' onChange={checkEl => radioHandler('remainData', checkEl)} defaultChecked />
                <span>전체</span>
              </div>
              <div>
                <input name='remainData' type='radio' value='up' onChange={checkEl => radioHandler('remainData', checkEl)} />
                <span>1000 이상</span>
              </div>
            </div>
          </div>
          <div className='margined'>
            <span>F/W ver.</span>
            <div className='InputBox'>
              <div>
                <input name='fwVer' type='radio' value='all' onChange={checkEl => radioHandler('fwVer', checkEl)} defaultChecked />
                <span>전체</span>
              </div>
              <div>
                <input name='fwVer' type='radio' value='1.0.0' onChange={checkEl => radioHandler('fwVer', checkEl)} />
                <span>1.0.0</span>
              </div>
              <div>
                <input name='fwVer' type='radio' value='0.8.2' onChange={checkEl => radioHandler('fwVer', checkEl)} />
                <span>0.8.2</span>
              </div>
            </div>
          </div>
          <div className='margined'>
            <span>H/W ver.</span>
            <div className='InputBox'>
              <div>
                <input name='hwVer' type='radio' value='all' onChange={checkEl => radioHandler('hwVer', checkEl)} defaultChecked />
                <span>전체</span>
              </div>
              <div>
                <input name='hwVer' type='radio' value='1.0.0' onChange={checkEl => radioHandler('hwVer', checkEl)} />
                <span>1.0.0</span>
              </div>
              <div>
                <input name='hwVer' type='radio' value='0.2.0' onChange={checkEl => radioHandler('hwVer', checkEl)} />
                <span>0.2.0</span>
              </div>
            </div>
          </div>
        </div>
      </SensorCheckBoxBlock>
    </Nav>
  );
};

const SensorCheckBoxBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${blue};
  .margined {
    margin-bottom: 15px;
  }
  .InputBox {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    [type='radio'] {
      vertical-align: middle;
      appearance: none;
      border: max(2px, 0.1em) solid ${blue};
      border-radius: 50%;
      width: 1.3em;
      height: 1.3em;
    }
    [type='radio']:checked {
      border: 0.4em solid ${blue};
    }
    span {
      margin-right: 0.5em;
    }
    /* ============= ======= 1484px ============ ======== */
    @media screen and (max-width: 1484px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .scroll {
    /* ============= ======= 1484px ============ ======== */
    @media screen and (max-width: 1484px) {
      height: 450px;
    }
  }

  /* ============= ======= 1484px ============ ======== */
  @media screen and (max-width: 1484px) {
    overflow: scroll;
  }

  /* ============= ======= 378px ============ ======== */
  @media screen and (max-width: 378px) {
  }
`;

export default SensorCheckBox;
