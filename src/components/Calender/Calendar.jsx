import styled from 'styled-components';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarBlue from '../../assets/img/calendar/calendarBlue.png';
import { blue } from '../../theme';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <CalendarBlock>
      <img className='calendar-icon' src={calendarBlue} />
      <DatePicker className='container' dateFormat='yyyy/MM/dd' selected={date} onChange={date => setDate(date)} />
    </CalendarBlock>
  );
};
const CalendarBlock = styled.div`
  display: flex;
  width: 80%;
  border: 1px solid ${blue};
  border-radius: 5px;
  background-color: transparent;

  .calendar-icon {
    width: 25px;
    padding: 3px;
  }
  .container {
    width: 100%;
    border: none;
    text-align: center;
    font-size: 18px;
    background-color: transparent;
    color: ${blue};
    font-weight: 600;
  }

  .react-datepicker {
    border: 2px solid ${blue};
    border-radius: 5px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: ${blue};
  }

  .react-datepicker__triangle {
    display: none;
  }
  .container react-datepicker-ignore-onclickoutside {
    border: none;
  }
  *:focus {
    outline: 0;
  }
  .react-datepicker__day-name {
    color: ${blue};
    font-weight: 700;
  }
  .react-datepicker__current-month {
    color: ${blue};
  }
  .react-datepicker__header {
    background-color: #ffffff;
    border-bottom: none;
  }

  .react-datepicker__day--selected {
    border-radius: 20px;
    color: #ffffff;
    background-color: ${blue};
  }
`;

export default Calendar;
