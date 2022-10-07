import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Graph from './Graph';

const GraphField = () => {
  const [tempData, setTempData] = useState({});
  const [humidityData, setHumidityData] = useState({});
  const [pressureData, setPressureData] = useState({});

  useEffect(() => {
    (async () => {
      // loading
      try {
        const {
          data: { channel, feeds },
        } = await axios.get('https://api.thingspeak.com/channels/1348864/feeds.json?api_key=6SKW0U97IPV2QQV9');

        setTempData({ id: channel.field1, data: extract('field1', feeds) });
        setHumidityData({ id: channel.field2, data: extract('field2', feeds) });
        setPressureData({ id: channel.field3, data: extract('field3', feeds) });
      } catch (error) {
        console.log(error);
        alert('통신 실패');
        // loading
      }
    })();
  }, []);

  const extract = (graphType, allData) => {
    const graphValue = [];

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

  return (
    <>
      <div style={{ height: '500px' }}>
        <Graph data={tempData} />
      </div>
      <div style={{ height: '500px' }}>
        <Graph data={humidityData} />
      </div>
      <div style={{ height: '500px' }}>
        <Graph data={pressureData} />
      </div>
    </>
  );
};

export default GraphField;
