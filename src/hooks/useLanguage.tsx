import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { set } from '../reducers/languageReducer';

function useLanguage() {
    const isEnglish = useSelector((state: RootState) => state.languageReducer.isEnglish)
    const dispatch = useDispatch();


    const setLanguage = (isEnglish: boolean) => dispatch(set(isEnglish));

    return { isEnglish, setLanguage }
}

export default useLanguage;
