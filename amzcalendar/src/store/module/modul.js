//파일과 리듀서를 위한 파일을 따로 작성하지만, 이번에는 하나로 작성. 이를 Ducks패턴 이라고 부름
import moment, { Moment as MomentTypes }from "moment";
import { createAction, handleActions } from 'redux-actions';

//액션의 타입을 정의(접두사를 달아주어 서로 다른 리듀서에서 액션이름의 중첩 방지)
const CHANGE_DATE = 'app/CHANGE_DATE';

//액션 생성함수 정의 :export로 내보내줘야한다(규칙)
//이 액션생성자의 생성에 있어 유용한 redux-actions의 createAction을 사용할 예정
export const dateChange = '';

//초기상태 정의
const initialState = {
    date = moment(),
}

//리듀서 정의:export default로 내보내줘야한다(규칙)