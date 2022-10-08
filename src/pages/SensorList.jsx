import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { blue, pearl } from '../theme';

const SensorList = () => {
  return (
    <Fade>
      <StyledSensor>
        <div className='sensor-inner-box'>
          <span>SensorList</span>
        </div>
      </StyledSensor>
    </Fade>
  );
};
export default SensorList;

const StyledSensor = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 20%;
  padding: 10px;
  background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
  background-size: cover;
  .sensor-inner-box {
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 3px solid ${blue};
    background-color: #ffffffd5;
  }

  /* ============= ======= 1024px ============ ======== */
  @media screen and (max-width: 1024px) {
  }

  /* ============= ======= 890px ============ ======== */
  @media screen and (max-width: 890px) {
    width: 100%;
    height: 100%;
    margin-left: 0;
    margin-top: 250px;
    padding: 10px;
    background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
    background-size: cover;
    .sensor-inner-box {
      width: 100%;
      height: 100%;
      padding: 20px;
      border: 3px solid ${blue};
      background-color: #ffffffd5;
    }
  }

  /* ============= ======= 480px ============ ======== */
  @media screen and (max-width: 480px) {
  }

  /* ============= ======= 378px ============ ======== */
  @media screen and (max-width: 378px) {
  }
`;
