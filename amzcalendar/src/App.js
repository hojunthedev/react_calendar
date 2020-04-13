import React from 'react';
import logo from './logo.svg';
import './App.scss';
import moment, { Moment as MomentTypes} from 'moment';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export class App extends React.Component{

    getCalendar = () => {
    const currentDate = moment(); //get current date
    //set to the first of this month & returns week-of-year of aMoment
    const firstWeek = currentDate.clone().startOf('month').week(); //using clone for prevent mutable 현재 주
    const lastWeek = currentDate.clone().endOf('month').week() === 1 ? 53 : currentDate.clone().endOf('month').week(); //year = 53weeks
    let calendar = [];

    for(let week = firstWeek;week <= lastWeek;week++){
      calendar.push(
        <div className="rows" key={week}>
          {
            //map(function(value, index){...})
            Array(7).fill(0).map((n, i) => {
              let current = currentDate.clone().week(week).startOf('week').add(n + i, 'day');
              let isSelected = currentDate.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
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
  }

  render(){
    return(
      <div className="Calendar">
      <div className="head">
        <button><MdChevronLeft /></button>
    <span className="title">{moment().format('MMMM YYYY')}</span>
        <button><MdChevronRight /></button>
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
        {this.getCalendar()}
      </div>
    </div>
    );
  }
}

export default App;
