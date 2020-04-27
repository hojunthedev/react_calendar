import React from 'react';
import AppContainer from './containers/CalendarContainer';

const App = (props) => {
  console.log(props);
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

export default App;