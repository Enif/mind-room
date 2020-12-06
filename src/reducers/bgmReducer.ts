
const PLAY = 'bgm/PLAY' as const;
const PAUSE = 'bgm/PAUSE' as const;

export const play = () => ({
    type: PLAY
});

export const pause = () => ({
    type: PAUSE
});


type BgmAction = ReturnType<typeof play> | ReturnType<typeof pause>

type BgmState = {
    isPlay: boolean
}

const initialState: BgmState = {
    isPlay: false
}

function bgmReducer(state: BgmState = initialState, action: BgmAction) {
    switch (action.type) {
        case PLAY:
            return {
                ...state,
                isPlay: true
            }
        case PAUSE:
            return {
                ...state,
                isPlay: false
            }
        default:
            return state;
    }
}

export default bgmReducer;
