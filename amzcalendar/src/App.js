import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      year : null,
      month : null,
      week : null,
      today : null,
    } 
  };

  componentDidMount = () => {
    let nowDate = new Date();
    let today = nowDate.getDate();
    let firstDay = new Date(nowDate.getFullYear(), nowDate.getMonth(),1);
    let lastDay = new Date(nowDate.getFullYear(), nowDate.getMonth(),0);
    let week = new Date(nowDate.getFullYear(), nowDate.getMonth(),nowDate.getDay());
    
    //아..moment 사용해야겠는걸
    
    this.setState({
      today: this.today,
    })
  }

  render(){
    const { today } = this.state;
    return(
      <div>
        {today}
      </div>
    );
  }

}

export default App;
