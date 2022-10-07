import styled from 'styled-components';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { blue, pearl } from '../../theme';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <CalendarBlack>
      <DatePicker locale={ko} dateFormat='yyyy-MM-dd' selected={startDate} onChange={date => setStartDate(date)} />
    </CalendarBlack>
  );
};
const CalendarBlack = styled.div`
  .react-datepicker {
    border: none;
  }
  .react-datepicker__month-container {
    background-color: ${pearl};
    border: 2px solid ${pearl};
  }
  .react-datepicker__day-name {
    color: ${blue};
    font-weight: 700;
  }
  .react-datepicker__current-month {
    color: ${blue};
  }
  .react-datepicker__header {
    background-color: ${pearl};
    border-bottom: none;
  }

  .react-datepicker__day--selected {
    border-radius: 20px;
    background-color: ${blue};
    color: ${pearl};
  }
`;

export default Calendar;
