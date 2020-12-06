import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import answerReducer from './answerReducer';
import soundReducer from './soundReducer';
import backgroundReducer from './backgroundReducer';
import bgmReducer from './bgmReducer';

const rootReducer = combineReducers({
    pageReducer,
    answerReducer,
    soundReducer,
    backgroundReducer,
    bgmReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
