
const ON = 'sound/ON' as const;
const OFF = 'sound/OFF' as const;

export const on = () => ({
    type: ON
});

export const off = () => ({
    type: OFF
});

type SoundAction = ReturnType<typeof on> | ReturnType<typeof off>

type SoundState = {
    isSoundOn: boolean
}

const initialState: SoundState = {
    isSoundOn: false
}

function soundReducer(state: SoundState = initialState, action: SoundAction) {
    switch (action.type) {
        case ON:
            return {
                isSoundOn: true
            }
        case OFF:
            return {
                isSoundOn: false
            }
        default:
            return state;
    }
}

export default soundReducer;
