import { combineReducers } from 'redux';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
    pageReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
