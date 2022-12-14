import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Frame = styled.div`
  width: 400px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

const Button = styled.div`
  cursor: pointer;
  
`;
const Button2 = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  background-color: #f5f6fa;
  border: 2px solid #eee;
 
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
        props.isToday &&
        css`
      border: 1px solid #eee;
    `}

  ${(props) =>
        props.isSelected &&
        css`
      background-color: #FF0000;
    `
    }
    ${(props) =>
        props.isSelected && console.log(props.test)

    }
`;

export function Calendar() {
    const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
    const formulaire = false;
    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(getStartDayOfMonth(date));
    }, [date]);

    function getStartDayOfMonth(date) {
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return startDate === 0 ? 7 : startDate;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

    return (
        <Frame>
            <center><Button2 onClick={() => formulaire === true}>R??server</Button2></center>
            <Header>
                <Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</Button>
                <div>
                    {MONTHS[month]} {year}
                </div>
                <Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</Button>

            </Header>

            <Body>
                {DAYS_OF_THE_WEEK.map((d) => (
                    <Day key={d}>
                        <strong>{d}</strong>
                    </Day>
                ))}

                {Array(days[month] + (startDay - 1))
                    .fill(null)
                    .map((_, index) => {
                        const d = index - (startDay - 2);

                        return (
                            <Day
                                key={index}
                                isToday={d === today.getDate()}
                                isSelected={d === day}
                                test={d + "/" + month + "/" + year}
                                onClick={() => setDate(new Date(year, month, d))}

                            >
                                {d > 0 ? d : ''}


                            </Day>


                        );
                    })}

            </Body>
            {
                formulaire ?
                    <h1>affichage du formulaire</h1>
                    : <h1>faux</h1>
            }
        </Frame >


    );
}