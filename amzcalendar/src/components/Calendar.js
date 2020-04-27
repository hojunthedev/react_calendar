import React from 'react';
import './Calendar.scss';
import moment from 'moment';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

//default export 별도 호출하던 것을 통합
function Calendar(props){
    function getCalendar(){
    const currentDate = moment(); //get current date
    //set to the first of this month & returns week-of-year
    const firstWeek = props.date.clone().startOf('month').week(); //using clone for prevent mutable
    const lastWeek = props.date.clone().endOf('month').week() === 1 ? 53 : props.date.clone().endOf('month').week(); //year = 53weeks
    let calendar = [];
    
    for(let week = firstWeek;week <= lastWeek;week++){
      calendar.push(
        <div className="row" key={week}>
          {
            //map(function(value, index){...})
            Array(7).fill(0).map((n, i) => {
              let current = props.date.clone().week(week).startOf('week').add(n + i, 'day');
              let isSelected = props.date.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isGrayed = current.format('MM') === currentDate.format('MM') ? '' : 'grayed';
              return (
                <div className={`box  ${isSelected} ${isGrayed}`} key={i}>
                  <span className={`text`}>{current.format('D')}</span>
                </div>
              )
            })
          }
        </div>
      )
    }
    return calendar;
  }

  //render(){ //함수형에는 render해주지 않아도 된다.
    return(
      <div className="Calendar">
      <div className="head">
        <button onClick={() => props.dateChange(props.date.clone().subtract(1, 'month'))}><MdChevronLeft /></button>
    <span className="title">{moment().format('MMMM YYYY')}</span>
        <button onClick={() => props.dateChange(props.date.clone().add(1, 'month'))}><MdChevronRight /></button>
      </div>
      <div className="body">
        <div className="row">
          <div className="box">
            <span className="text">SUN</span>
          </div>
          <div className="box">
            <span className="text">MON</span>
          </div>
          <div className="box">
            <span className="text">TUE</span>
          </div>
          <div className="box">
            <span className="text">WED</span>
          </div>
          <div className="box">
            <span className="text">THU</span>
          </div>
          <div className="box">
            <span className="text">FRI</span>
          </div>
          <div className="box">
            <span className="text">SAT</span>
          </div>
        </div>
        {getCalendar()}
      </div>
    </div>
    );
  //}
}

export default Calendar;