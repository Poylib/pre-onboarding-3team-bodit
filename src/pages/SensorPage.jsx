import styled from 'styled-components';

import { useState } from 'react';
import SensorChart from '../components/SensorChart/SensorChart';
import SensorCheckBox from '../components/SensorChart/SensorCheckBox';

const SensorPage = () => {
  const [checkedArray, setCheckedArray] = useState({});

  return (
    <StyledSensor>
      <SensorChart checkedArray={checkedArray} />
      <SensorCheckBox //
        checkedArray={checkedArray}
        setCheckedArray={setCheckedArray}
      />
    </StyledSensor>
  );
};
export default SensorPage;

const StyledSensor = styled.div`
  display: flex;
`;
