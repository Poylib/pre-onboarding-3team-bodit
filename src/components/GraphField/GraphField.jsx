import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Graph from './Graph';

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
        } = await axios.get(`https://api.thingspeak.com/channels/1348864/feeds.json?api_key=6SKW0U97IPV2QQV9&${makeDateRangeQuery()}&results=140&average=60&status=true`);
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
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '-' + month + '-' + day;

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const timeStr = hours + ':' + minutes + ':' + seconds;

    const startTime = `start=${dateStr}%2000:00:00`;
    const endTime = `end=${dateStr}%20${timeStr}`;
    return startTime + '&' + endTime;
  };

  return (
    <>
      <GraphWrapper>
        <Graph data={tempData} />
      </GraphWrapper>
      <GraphWrapper>
        <Graph data={humidityData} />
      </GraphWrapper>
      <GraphWrapper>
        <Graph data={pressureData} />
      </GraphWrapper>
    </>
  );
};

export default GraphField;

const GraphWrapper = styled.div`
  height: 500px;

  text {
    font-size: 20px;
  }
`;
