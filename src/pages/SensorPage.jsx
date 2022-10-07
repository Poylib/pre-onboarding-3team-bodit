import styled from 'styled-components';
import SensorChart from '../components/SensorChart/SensorChart';

const SensorPage = () => {
  return (
    <StyledSensor>
      <SensorChart />
    </StyledSensor>
  );
};
export default SensorPage;

const StyledSensor = styled.div``;
