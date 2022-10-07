import styled from 'styled-components';
import SensorChart from '../components/SensorChart/SensorChart';
import SensorCheckBox from '../components/SensorChart/SensorCheckBox';

const SensorPage = () => {
  return (
    <StyledSensor>
      <SensorChart />
      <SensorCheckBox />
    </StyledSensor>
  );
};
export default SensorPage;

const StyledSensor = styled.div`
  display: flex;
`;
