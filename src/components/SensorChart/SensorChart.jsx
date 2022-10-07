import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ChartRow from './ChartRow';
import ChartHeader from './ChartHeader';

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
      <ChartHeader />
      <table>
        {chartData.map((sensorList, index) => {
          return (
            <>
              <ChartRow key={`${sensorList.thingName}+${index}`} chartdata={sensorList} index={index} />
            </>
          );
        })}
      </table>
    </SensorChartBlock>
  );
};

export default SensorChart;

const SensorChartBlock = styled.div``;
