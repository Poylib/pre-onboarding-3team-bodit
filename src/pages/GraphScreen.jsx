import { blue, pearl } from '../theme';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
const GraphScreen = () => {
  return (
    <>
    <Fade >
      <StyledGraphScreen>
        <div className='graph-inner-box'>
          {/* 기온박스 */}
          <div className='temperatures-box'>1</div>
          {/* 습도박스 */}
          <div className='humidity-box'>2</div>
          {/* 기압박스 */}
          <div className='atmospheric-pressure-box'>3</div>
        </div>
      </StyledGraphScreen>
      </Fade>
    </>
  );
};
export default GraphScreen;

const StyledGraphScreen = styled.div`
  width: 80%;
  height: 100vh;
  margin-left: 20%;
  padding: 10px;
  background-image: url('https://cdn.pixabay.com/photo/2019/07/19/12/06/network-4348668_1280.png');
  background-size: cover;
  .graph-inner-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 3px solid ${blue};
    background-color: #ffffffd5;
    .temperatures-box {
      width: 100%;
      height: 300px;
      margin-bottom: 50px;
      background: #777;
    }
    .humidity-box {
      width: 100%;
      height: 300px;
      margin-bottom: 50px;
      background: #777;
    }
    .atmospheric-pressure-box {
      width: 100%;
      height: 300px;
      background: #777;
    }
  }

  /* ============= ======= 1024px ============ ======== */
  @media screen and (max-width: 1024px) {
  }

  /* ============= ======= 890px ============ ======== */
  @media screen and (max-width: 890px) {
    margin-left: 0;
    margin-top: 250px;
  }

  /* ============= ======= 480px ============ ======== */
  @media screen and (max-width: 480px) {
  }

  /* ============= ======= 378px ============ ======== */
  @media screen and (max-width: 378px) {
  }
`;
