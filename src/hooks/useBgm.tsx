import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { play, pause } from '../reducers/bgmReducer';

function useBgm() {
    const isBgmPlay = useSelector((state: RootState) => state.bgmReducer.isPlay)
    const dispatch = useDispatch();

    const playBgm = () => dispatch(play());
    const pauseBgm = () => dispatch(pause());

    return { isBgmPlay, playBgm, pauseBgm }
}

export default useBgm;
