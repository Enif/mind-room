
const SET = 'language/SET' as const;

export const set = (isEnglish: boolean) => ({
    type: SET,
    isEnglish: isEnglish
});


type LanguageAction = ReturnType<typeof set>

type LanguageState = {
    isEnglish: boolean
}

const initialState: LanguageState = {
    isEnglish: false
}

function languageReducer(state: LanguageState = initialState, action: LanguageAction) {
    switch (action.type) {
        case SET:
            return {
                ...state,
                isEnglish: action.isEnglish
            }
        default:
            return state;
    }
}

export default languageReducer;
