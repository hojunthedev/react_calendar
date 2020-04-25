//파일과 리듀서를 위한 파일을 따로 작성하지만, 이번에는 하나로 작성. 이를 Ducks패턴 이라고 부름
import moment, { Moment as MomentTypes, calendarFormat }from "moment";
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

//액션의 타입을 정의(접두사를 달아주어 서로 다른 리듀서에서 액션이름의 중첩 방지)
const CHANGE_DATE = 'app/CHANGE_DATE';

//액션 생성함수 정의 :export로 내보내줘야한다(규칙)
//이 액션생성자의 생성에 있어 유용한 redux-actions의 createAction을 사용
export const dateChange = createAction(CHANGE_DATE);

//초기상태 정의
const initialState = {
    date : moment(),
}

//[리듀서] 정의:export default로 내보내줘야한다(규칙) 변화를 일으키는 함수, 두가지 파라미터를 가진다(state, action)
//handleActions의 파라미터(실행할 함수들을 가지고 있는 객체, 상태의 기본값)
export default handleActions({
    [CHANGE_DATE] : (state, action) => {
        //immer.js로 불변성을 관리할 예정. 불변성관리의 중요성을 잘 숙지할 것.
        //produce함수의 파라미터는(수정하고싶은 상태, 어떻게 업데이트하고 싶은지)
        return produce(state, draft => {
            draft.date = action.payload
        })
        
    },
    //[ETC_ACTIONS] : blah
}, initialState);
