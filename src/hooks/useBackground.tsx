import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { set } from '../reducers/backgroundReducer';

function useBackground() {
    const backgroundColor = useSelector((state: RootState) => state.backgroundReducer.backgroundColor)
    const dispatch = useDispatch();

    const setBackgroundColor = (backgroundColor: string) => dispatch(set(backgroundColor));
    return { backgroundColor, setBackgroundColor }
}

export default useBackground;
