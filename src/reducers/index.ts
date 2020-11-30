import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import answerReducer from './answerReducer';
import soundReducer from './soundReducer';

const rootReducer = combineReducers({
    pageReducer,
    answerReducer,
    soundReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
