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
      <DatePicker shouldCloseOnSelect={false} className='container' dateFormat='yyyy/MM/dd' dateFormatCalendar='yyyy년 M월' selected={date} onChange={date => setDate(date)} />
    </CalendarBlock>
  );
};
const CalendarBlock = styled.div`
  display: flex;
  width: 70%;
  padding: 3px;
  background-color: transparent;
  border: 1px solid ${blue};
  border-radius: 5px;

  .calendar-icon {
    width: 30px;
  }
  .container {
    width: 100%;
    border: none;
    text-align: center;
    font-size: 20px;
    background-color: transparent;
    color: ${blue};
    font-weight: 600;
  }

  .react-datepicker {
    border: 2px solid ${blue};
    border-radius: 5px;
    box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;
    inset: -196px auto auto -20px;
    transform: translate3d(-29px, 196.5px, 0px);
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
    font-size: 18px;
  }
  .react-datepicker__header {
    background-color: #ffffff;
    border-bottom: none;
  }

  .react-datepicker__day--selected {
    color: #ffffff;
    background-color: ${blue};
  }
  .react-datepicker__day--keyboard-selected {
    color: #ffffff;
    background-color: ${blue};
  }
  @media screen and (max-width: 890px) {
    display: flex;
    width: 70%;
    padding: 3px;
    background-color: transparent;
    border: 1px solid #ffffff;
    border-radius: 5px;
    .container {
      width: 100%;
      border: none;
      text-align: center;
      font-size: 20px;
      background-color: transparent;
      color: #ffffff;
      font-weight: 600;
    }
    .calendar-icon {
      width: 30px;
      filter: opacity(0.4) drop-shadow(0 0 0 #fff);
    }
  } ;
`;

export default Calendar;