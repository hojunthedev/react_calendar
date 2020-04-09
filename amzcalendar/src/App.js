import React from 'react';
import logo from './logo.svg';
import './App.css';

class AmazingCalendar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      year : null,
      month : null,
      week : null,
      day : null,
    } 
  };

  componentDidMount = () => {
    let today = new Date();
    let firstDay = new Date(today.getFullYear(), today.getMonth(),1);
    let lastDay = new Date(today.getFullYear(), today.getMonth(),0);
  }

  render(){
    return(
      ""
    );
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
