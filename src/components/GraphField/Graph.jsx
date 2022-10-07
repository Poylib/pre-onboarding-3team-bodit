import styled from 'styled-components';
import { ResponsiveLine } from '@nivo/line';
import { blue } from '../../theme';

const Graph = ({ data, unit, color }) => {
  return (
    <GraphWrapper>
      <ResponsiveLine
        colors={color}
        theme={{ fontSize: '14px', textColor: blue }}
        data={data}
        margin={{ top: 10, right: 10, bottom: 70, left: 70 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat='>-.2f'
        curve='catmullRom'
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: 'Date',
          legendOffset: 60,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: unit,
          legendOffset: -55,
          legendPosition: 'middle',
        }}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[]}
      />
    </GraphWrapper>
  );
};

export default Graph;

const GraphWrapper = styled.div`
  height: 300px;
  padding: 10px;
`;
