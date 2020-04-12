import React from 'react';
import logo from './logo.svg';
import './App.css';
import { moment } from 'moment';

export class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      year : null,
      month : null,
      today : null,
      calendar = [],
    } 
  };

  componentDidMount = () => {
    let currentDate = moment();
    let firstWeek = currentDate.clone().startOf('month').week(); //using clone for prevent mutable 
    let lastWeek = currentDate.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week(); //year = 53weeks
    const {calendar} = this.state;

    for(let week = firstWeek;week <= lastWeek;week++){
      calendar.push(
        <div className="rows" key={week}>
          {
            Array(7).fill(null).map((n, i) => {
              let current = today.clone().week(week).startOf('week').add(n + i, 'day')
              let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
              let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
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



    this.setState = {
      
    }
    
    this.setState({
      week:today,
    })
  }

  render(){
    const { week } = this.state;
    return(
      <div>
        {week}
      </div>
    );
  }

}

export default App;
