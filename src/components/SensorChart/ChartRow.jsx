import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { pearl } from '../../theme';

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
        return <td key={`${rowArray[0] + index}`}>{rowdata}</td>;
      })}
    </RowTr>
  );
};

export default ChartRow;

const RowTr = styled.tr`
  border: none;
  line-height: 30px;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  background-color: ${pearl};
  td {
    text-align: center;
    vertical-align: middle;
    padding: 0 20px 0 20px;
  }
  &:hover {
    background-color: grey;
  }
`;
