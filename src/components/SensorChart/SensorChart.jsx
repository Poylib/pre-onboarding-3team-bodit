import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ChartRow from './ChartRow';
import GraphScreen from '../../pages/GraphScreen';
// import ChartHeader from './ChartHeader';

const SensorChart = ({ checkedArray }) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  const checkboxCondition = ['connCardNum', 'fwVer', 'hwVer'];

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await axios('/data/sensorInfoList.json');
        setLoading(false);
        setChartData(data);
        setDisplayData(data);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    })();
  }, []);

  useEffect(() => {
    let test = [];

    for (const sensorList of chartData) {
      let checkboxConditionState = true;
      let sensorListStateArray = Object.keys(checkedArray);
      if (sensorListStateArray.includes('thingName')) {
        if (!sensorList.thingName.includes(checkedArray.thingName) && checkedArray.thingName !== 'all') {
          continue;
        }
      }

      if (sensorListStateArray.includes('batLvl')) {
        if (checkedArray.batLvl === 'up') {
          if (sensorList.shadow.batLvl <= 20) {
            continue;
          }
        } else if (checkedArray.batLvl === 'down') {
          if (sensorList.shadow.batLvl > 20) {
            continue;
          }
        }
      }

      if (sensorListStateArray.includes('ConnectionState')) {
        if (checkedArray.ConnectionState === 'connect') {
          if (!sensorList.shadow.connectedGateway) {
            continue;
          }
        } else if (checkedArray.ConnectionState === 'disconnect') {
          if (sensorList.shadow.connectedGateway) {
            continue;
          }
        }
      }

      if (sensorListStateArray.includes('remainData')) {
        if (checkedArray.remainData === 'up') {
          if (sensorList.shadow.remainData < 1000) {
            continue;
          }
        }
      }

      checkboxCondition.some(condition => {
        if (sensorListStateArray.includes(condition)) {
          if (!String(sensorList.shadow[condition]).includes(checkedArray[condition]) && checkedArray[condition] !== 'all') {
            checkboxConditionState = false;
            return true;
          }
        }
      });
      if (checkboxConditionState) {
        test.push(sensorList);
      } else {
        continue;
      }
    }
    setDisplayData(test);
  }, [checkedArray]);

  return (
    <GraphScreen>
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
            {displayData.map((sensorList, index) => {
              return (
                <>
                  <ChartRow key={`${sensorList.thingName}+${index}`} chartdata={sensorList} index={index} />
                </>
              );
            })}
          </tbody>
        </table>
      </SensorChartBlock>
    </GraphScreen>
  );
};

export default SensorChart;

const SensorChartBlock = styled.div`
  height: 100%;
  overflow: scroll;
  td {
    text-align: center;
  }
  .fixed {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    overflow: hidden;
    background-color: #ffffff;
  }
`;
