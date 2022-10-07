import styled from 'styled-components';

const ChartHeader = () => {
  return (
    <ChartHeaderBlock>
      <span>#</span>
      <span>Sensor ID</span>
      <span>Bat.(%)</span>
      <span>Connected at</span>
      <span>Disconnected at</span>
      <span>Reason</span>
      <span>Card No.</span>
      <span>Gateway</span>
      <span>Raw sent</span>
      <span>Remain</span>
      <span>RSSI</span>
      <span>F/W ver.</span>
      <span>H/W ver.</span>
    </ChartHeaderBlock>
  );
};

export default ChartHeader;

const ChartHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 1px solid black;
`;
