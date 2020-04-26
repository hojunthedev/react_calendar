//container란, 리덕스와 연동된 컴포넌트를 우리는 컨테이너 컴포넌트라고 부른다.             :스마트 컴포넌트
//단순히 props를 전달해주며 그대로 보여주는 컴포넌트들은 프레젠테이셔널 컴포넌트라고 부른다. : 덤 컴포넌트
//각각의 장점이 있다.

import React from 'react';
import { connect } from 'react-redux';
import App from './App';
import { dateChange } from './store/calendar';
import { bindActionCreators } from 'redux';

class AppContainer extends React.Component {
    render(){
        const {date, dateChange} = this.props;
        return(
            <App date={date} dateChange={dateChange}/>
        )
    }
}

//컴포넌트에 리덕스 스토어를 연동해줄떄에는 connect함수 사용
export default connect(
    ({ calendar }) => ({
        date : calendar.date
    }),
    //dispatch(action) 액션을 보냅니다. 이것이 상태변경을 일으키기위한 유일한 방법.
    (dispatch) => ({
        dateChange : bindActionCreators(dateChange, dispatch)
    })
)(AppContainer); //redux(3)