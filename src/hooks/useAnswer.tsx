import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { set } from '../reducers/answerReducer';

function useAnswer() {
    const answers = useSelector((state: RootState) => state.answerReducer.answers)
    const dispatch = useDispatch();

    const setAnswer = (idx: number, answer: number) => dispatch(set(idx, answer));
    // const getAnswer = (idx: number) => 
    return { answers, setAnswer }
}

export default useAnswer;
