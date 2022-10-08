import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Graph from './Graph';
import { blue } from '../../theme';

const GraphField = () => {
  const [tempData, setTempData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [pressureData, setPressureData] = useState([]);

  useEffect(() => {
    (async () => {
      // loading
      try {
        const {
          data: { channel, feeds },
        } = await axios.get(`https://api.thingspeak.com/channels/1348864/feeds.json?api_key=6SKW0U97IPV2QQV9&${makeDateRangeQuery()}&results=140&average=60`);
        setTempData([{ id: channel.field1, data: extract('field1', feeds) }]);
        setHumidityData([{ id: channel.field2, data: extract('field2', feeds) }]);
        setPressureData([{ id: channel.field3, data: extract('field3', feeds) }]);
      } catch (error) {
        console.log(error);
        alert('통신 실패');
        // loading
      }
    })();
  }, []);

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

  const makeDateRangeQuery = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const yesterDay = '0' + (date.getDate() - 1);
    const day = '0' + date.getDate();
    const dateStr = year + '-' + month + '-';

    const startDay = `start=${dateStr + yesterDay}`;
    const endDay = `end=${dateStr + day}`;

    return startDay + '&' + endDay;
  };

  return (
    <GraphFieldWrapper>
      <Graph data={tempData} unit={'Temperature (°C)'} color={'black'} />
      <Graph data={humidityData} unit={'Humidity (%)'} color={'red'} />
      <Graph data={pressureData} unit={'pressure (hPa)'} color={'aqua'} />
    </GraphFieldWrapper>
  );
};

export default GraphField;

const GraphFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 40px;
  border: 3px solid ${blue};
  background-color: #ffffffd5;



  
  @media screen and (max-width: 1024px) {
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 9%  0px  9%;
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
