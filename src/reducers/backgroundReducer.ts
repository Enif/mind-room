
const SET = 'background/SET' as const;

export const set = (backgroundColor: string) => ({
    type: SET,
    backgroundColor
});


type BackgroundAction = ReturnType<typeof set>

type BackgroundState = {
    backgroundColor: string
}

const initialState: BackgroundState = {
    backgroundColor: "#FFFFFF"
}

function backgroundReducer(state: BackgroundState = initialState, action: BackgroundAction) {
    switch (action.type) {
        case SET:
            return {
                ...state,
                backgroundColor: action.backgroundColor
            }
        default:
            return state;
    }
}

export default backgroundReducer;
