import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './stores';
import { Provider } from 'react-redux';

//리듀서가 여러개일 경우, combineReducers를 이용하자.
//const store = createStore(calendar); //파라미터로는 리듀서 함수를 전달해준다.
//console.log(store.getState());

ReactDOM.render(
  //provider : 리액트 프로젝트에 스토어 연동. props = store
  <Provider store= {store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
