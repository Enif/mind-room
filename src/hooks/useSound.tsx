import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { on, off } from '../reducers/soundReducer';

function useSound() {
    const isSoundOn = useSelector((state: RootState) => state.soundReducer.isSoundOn)
    const dispatch = useDispatch();

    const soundOn = () => dispatch(on());
    const soundOff = () => dispatch(off());

    return { isSoundOn, soundOn, soundOff }
}

export default useSound;
