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
    setAscending(!ascending);
    if (optionCheck) console.log(optionCheck);
  }, [optionCheck]);

  return (
    <SensorChartBlock>
      <table>
        <thead className='fixed'>
          <tr>
            <td>
              <span>#</span>
            </td>
            {header.map((category, index) => {
              return (
                <td key={`${category.id + index}`} onClick={() => setOptionCheck(category.id)}>
                  <span>{category.name}</span>
                  <BsFillTriangleFill />
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
    background-color: #ffffff;
  }
  svg {
  }
`;
