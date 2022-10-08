import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { header } from '../../assets/sensor/header';
import ChartRow from './ChartRow';

const SensorChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [optionCheck, setOptionCheck] = useState('');
  const [ascending, setAscending] = useState(true);
  let originData = [];
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

  useEffect(() => {
    if (optionCheck === 'thingName') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.thingName.split('-')[1] - b.thingName.split('-')[1]));
      } else {
        setChartData(chartData.sort((a, b) => b.thingName.split('-')[1] - a.thingName.split('-')[1]));
      }
    } else if (optionCheck === 'batLvl') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.batLvl - b.shadow.batLvl));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.batLvl - a.shadow.batLvl));
      }
    } else if (optionCheck === 'connCardNum') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.connCardNum - b.shadow.connCardNum));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.connCardNum - a.shadow.connCardNum));
      }
    } else if (optionCheck === 'connGW') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.connGW.split('-')[1] - b.shadow.connGW.split('-')[1]));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.connGW.split('-')[1] - a.shadow.connGW.split('-')[1]));
      }
    } else if (optionCheck === 'rawSentCnt') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.rawSentCnt - b.shadow.rawSentCnt));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.rawSentCnt - a.shadow.rawSentCnt));
      }
    } else if (optionCheck === 'remainData') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.remainData - b.shadow.remainData));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.remainData - a.shadow.remainData));
      }
    } else if (optionCheck === 'rssi') {
      setOptionCheck('');
      setAscending(!ascending);
      if (ascending) {
        setChartData(chartData.sort((a, b) => a.shadow.rssi - b.shadow.rssi));
      } else {
        setChartData(chartData.sort((a, b) => b.shadow.rssi - a.shadow.rssi));
      }
    } else {
      console.log(originData);
    }
  }, [optionCheck]);
  return (
    <SensorChartBlock>
      <table>
        <thead className='fixed'>
          <tr>
            {header.map((category, index) => {
              return (
                <td className='headline' key={`${category.id + index}`} onClick={() => setOptionCheck(category.id)}>
                  <span>{category.name}</span>
                  {category.sort ? '' : <BsFillTriangleFill />}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {chartData.map((sensorList, index) => {
            return <ChartRow key={`${sensorList.thingName + index}`} chartdata={sensorList} index={index} />;
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
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    overflow: hidden;
    line-height: 30px;
    height: 30px;
    background-color: #ffffff;
    .headline {
      font-size: 8px;
      span {
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
`;
