import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import answerReducer from './answerReducer';

const rootReducer = combineReducers({
    pageReducer,
    answerReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
