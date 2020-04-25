//container란, 리덕스와 연동된 컴포넌트를 우리는 컨테이너 컴포넌트라고 부른다.             :스마트 컴포넌트
//단순히 props를 전달해주며 그대로 보여주는 컴포넌트들은 프레젠테이셔널 컴포넌트라고 부른다. : 덤 컴포넌트
//각각의 장점이 있다.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from './App';
import {changeDate} from './store/calendar';

class AppContainer extends React.Component {

}