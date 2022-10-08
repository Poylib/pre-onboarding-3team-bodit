import styled from 'styled-components';
import { useState, useEffect } from 'react';

const ChartRow = props => {
  const { chartdata, index } = props;
  const [rowArray, setRowArray] = useState([]);

  useEffect(() => {
    let reasonData = '0x' + chartdata.shadow.disconnReason.toString(16).toUpperCase();

    setRowArray([
      chartdata.thingName,
      chartdata.shadow.batLvl,
      chartdata.shadow.connAt,
      chartdata.shadow.disconnAt,
      reasonData,
      chartdata.shadow.connCardNum,
      chartdata.shadow.connGW,
      chartdata.shadow.rawSentCnt,
      chartdata.shadow.remainData,
      chartdata.shadow.rssi,
      chartdata.shadow.fwVer,
      chartdata.shadow.hwVer,
    ]);
  }, [chartdata]);

  return (
    <RowTr>
      <th>{index}</th>
      {rowArray.map((rowdata, index) => {
        if (index === 1 && rowdata <= 20) {
          return (
            <td className='lowBattery' key={index + chartdata.thingName}>
              {rowdata}
            </td>
          );
        }
        return <td key={index + chartdata.thingName}>{rowdata}</td>;
      })}
    </RowTr>
  );
};

export default ChartRow;

const RowTr = styled.tr`
  border: none;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  background-color: lightcoral; /* 규격테스트용 */
  td {
    text-align: center;
    vertical-align: middle;
    padding: 0 20px 0 20px;
  }
  .lowBattery {
    color: #ff0000;
  }
`;
