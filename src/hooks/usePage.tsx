import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { go, goNext, goPrev, goNextQuestion, openAnswer } from '../reducers/pageReducer';

function usePage() {
    const pageIdx = useSelector((state: RootState) => state.pageReducer.pageIdx)
    const questionIdx = useSelector((state: RootState) => state.pageReducer.questionIdx)
    const isAnswerOpened = useSelector((state: RootState) => state.pageReducer.isAnswerOpened)

    const dispatch = useDispatch();

    const goNextPage = () => dispatch(goNext());
    const goPrevPage = () => dispatch(goPrev());
    const goPage = (idx: number) => dispatch(go(idx));
    const goNextSentence = () => dispatch(goNextQuestion());
    const openAnswerOptions = () => dispatch(openAnswer());

    return {
        pageIdx, questionIdx, isAnswerOpened,
        goPage, goNextPage, goPrevPage,
        goNextSentence, openAnswerOptions
    }
}

export default usePage;
