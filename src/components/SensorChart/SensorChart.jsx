import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ChartRow from './ChartRow';
// import ChartHeader from './ChartHeader';

const SensorChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios('/data/sensorInfoList.json');
        setLoading(false);
        setChartData(data);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    })();
  }, []);
  return (
    <SensorChartBlock>
      {/* <ChartHeader /> */}
      <table>
        <thead className='fixed'>
          <tr>
            <td>#</td>
            <td>Sensor ID</td>
            <td>Bat.(%)</td>
            <td>Connected at</td>
            <td>Disconnected at</td>
            <td>Reason</td>
            <td>Card No.</td>
            <td>Gateway</td>
            <td>Raw sent</td>
            <td>Remain</td>
            <td>RSSI</td>
            <td>F/W ver.</td>
            <td>H/W ver.</td>
          </tr>
        </thead>
        <tbody>
          {chartData.map((sensorList, index) => {
            return (
              <>
                <ChartRow key={`${sensorList.thingName}+${index}`} chartdata={sensorList} index={index} />
              </>
            );
          })}
        </tbody>
      </table>
    </SensorChartBlock>
  );
};

export default SensorChart;

const SensorChartBlock = styled.div`
  td {
    text-align: center;
  }
  .fixed {
    position: sticky;
    top: 0;
    overflow: hidden;
    background-color: white;
  }
`;
