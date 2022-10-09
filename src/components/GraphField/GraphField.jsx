import axios from 'axios';
import Bounce from 'react-reveal/Bounce';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Graph from './Graph';
import { blue } from '../../theme';

const GraphField = () => {
  const location = useLocation();
  const [tempData, setTempData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [pressureData, setPressureData] = useState([]);
  const [targetRange, setTargetRange] = useState([]);
  const [targetTimeQuery, setTargetTimeQuery] = useState('');
  const [calendarDate, setCalendarDate] = useState('');
  const [isData, setIsData] = useState(true);

  useEffect(() => {
    setCalendarDate(location.search.replace('?', ''));
    setTargetRange([]);
    setTargetTimeQuery('');
  }, [location.search]);

  useEffect(() => {
    (async () => {
      // loading
      try {
        const {
          data: { channel, feeds },
        } = await axios.get(
          targetTimeQuery
            ? `https://api.thingspeak.com/channels/1348864/feeds.json?api_key=6SKW0U97IPV2QQV9&${targetTimeQuery}`
            : `https://api.thingspeak.com/channels/1348864/feeds.json?api_key=6SKW0U97IPV2QQV9&${calendarDate}&results=140&average=60`
        );
        if (feeds.length > 0) {
          setTempData([{ id: channel.field1, data: extract('field1', feeds) }]);
          setHumidityData([{ id: channel.field2, data: extract('field2', feeds) }]);
          setPressureData([{ id: channel.field3, data: extract('field3', feeds) }]);
          setIsData(true);
        } else {
          setIsData(false);
        }
      } catch (error) {
        console.log(error);
        setIsData(false);
        // loading
      }
    })();
  }, [calendarDate, targetTimeQuery]);

  const extract = (graphType, allData) => {
    let graphValue = [];

    allData.map(allDataByDate => {
      const graphX = allDataByDate.created_at.substr(11, 5);
      const graphY = allDataByDate[graphType];

      graphValue.push({
        x: graphX,
        y: graphY,
      });
    });

    return graphValue;
  };

  const getTargetTime = time => {
    const targetHour = Number(time.split(':')[0]);
    const targetMin = time.split(':')[1];
    let startTime;

    targetHour < 3 ? (startTime = '00:00') : (startTime = ('0' + (targetHour - 3)).slice(-2) + ':' + targetMin);
    const endTime = ('0' + (targetHour + 3)).slice(-2) + ':' + targetMin;

    setTargetRange([startTime, endTime]);
  };

  const makeTargetQuery = () => {
    const date = calendarDate.split('&')[0].split('=')[1];

    const startQuery = `start=${date}%20${targetRange[0]}:00`;
    const endQuery = `end=${date}%20${targetRange[1]}:00`;

    setTargetTimeQuery([startQuery, endQuery].join('&'));
  };

  return (
    <GraphFieldWrapper>
      {isData ? (
        <div className='graph-field'>
          <TargetTime>
            <div className='time-inner-box'>
              <span className='time'>
                {targetRange[0]}~{targetRange[1]}
              </span>
              <button className='time-btn' onClick={makeTargetQuery}>
                적용하기
              </button>
              <span className='tooltip'>
                <span className='tiptext'>그래프에서 원하는 시간대를 클릭하면 해당시간부터 6시간 간격으로 그래프가 확대됩니다.</span>
              </span>
            </div>
          </TargetTime>
          <Bounce>
            <Graph data={tempData} unit={'Temperature (°C)'} color={'black'} getTargetTime={getTargetTime} />
          </Bounce>
          <Bounce delay={500}>
            <Graph data={humidityData} unit={'Humidity (%)'} color={'red'} getTargetTime={getTargetTime} />
          </Bounce>
          <Bounce delay={1000}>
            <Graph data={pressureData} unit={'pressure (hPa)'} color={'aqua'} getTargetTime={getTargetTime} />
          </Bounce>
        </div>
      ) : (
        <div className='none-graph-field'>데이터가 없습니다.</div>
      )}
    </GraphFieldWrapper>
  );
};

export default GraphField;
const TargetTime = styled.div``;

const GraphFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 40px;
  border: 3px solid ${blue};
  background-color: #ffffffd5;
  .time-inner-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .time {
      margin-bottom: 20px;
      font: bold 30px/1 'apple';
      color: ${blue};
    }
    .time-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 30px;
      margin-bottom: 20px;
      font: bold 15px/1 'apple';
      color: ${blue};
      background: none;
      border: 1px solid ${blue};
      transition: all 0.5s;
      &:hover {
        box-shadow: 1px 1px 2px #000;
      }
    }
    .tooltip {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin: 10px 0px 10px 0px;
      font-size: 12px;
      color: ${blue};
    }
  }

  .none-graph-field {
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 9% 0px 9%;
    border: 3px solid ${blue};
    background-color: #ffffffd5;
  }
  @media screen and (max-width: 890px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 378px) {
  }
`;
