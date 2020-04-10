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
    let lastDay = currentDate.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
        
    //아..moment 사용해야겠는걸
    
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
