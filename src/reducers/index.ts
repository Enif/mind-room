import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import answerReducer from './answerReducer';
import soundReducer from './soundReducer';
import backgroundReducer from './backgroundReducer';

const rootReducer = combineReducers({
    pageReducer,
    answerReducer,
    soundReducer,
    backgroundReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
