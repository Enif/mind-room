import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { go, goNext, goPrev } from '../reducers/pageReducer';

function usePage() {
    const pageIdx = useSelector((state: RootState) => state.pageReducer.pageIdx)
    const dispatch = useDispatch();

    const goNextPage = () => dispatch(goNext());
    const goPrevPage = () => dispatch(goPrev());

    return { pageIdx, goNextPage, goPrevPage }
}

export default usePage;
