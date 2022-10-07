import styled from 'styled-components';

const SensorCheckBox = () => {
  return (
    <SensorCheckBoxBlock>
      <div className='margined'>
        <span>Sensor ID</span>
        <div>
          <input type='checkbox' />
          전체
          <input type='checkbox' />
          FHL
          <input type='checkbox' />
          FHS
        </div>
      </div>
      <div className='margined'>
        <span>Bat.(%)</span>
        <div>
          <input type='checkbox' />
          전체
          <input type='checkbox' />
          20% 초과
          <input type='checkbox' />
          20% 이하
        </div>
      </div>
      <div className='margined'>
        <span>Connection State</span>
        <div>
          <input type='checkbox' />
          전체
          <input type='checkbox' />
          연결중
          <input type='checkbox' />
          연결해제됨
        </div>
      </div>
      <div className='margined'>
        <span>Card No.</span>
        <div>
          <input type='checkbox' />
          전체
          <input type='checkbox' />
          1
          <input type='checkbox' />0
        </div>
      </div>
      <div className='margined'>
        <span>Remain</span>
        <div>
          <input type='checkbox' />
          전체
          <input type='checkbox' />
          1000이상
        </div>
      </div>
      <div className='margined'>
        <span>F/W ver.</span>
        <div>
          <input type='checkbox' />
          전체
          <input type='checkbox' />
          1.0.0
          <input type='checkbox' />
          0.8.2
        </div>
      </div>
      <div className='margined'>
        <span>H/W ver.</span>
        <div>
          <input type='checkbox' />
          전체
          <input type='checkbox' />
          1.0.0
          <input type='checkbox' />
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
