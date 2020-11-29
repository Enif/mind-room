
const SET = 'answer/SET' as const;
// const GET = 'answer/GET' as const;

export const set = (idx: number, answer: number) => ({
    type: SET,
    idx,
    answer
});

// export const get = (idx: number) => ({
//     type: GET,
//     idx
// });

type AnswerAction = ReturnType<typeof set>

type AnswerState = {
    answers: {
        "1": number,
        "2": number,
        "3": number,
        "4": number,
        "5": number,
        "6": number,
        "7": number,
        "8": number,
        "9": number
    }
}

const initialState: AnswerState = {
    answers: {
        "1": -1,
        "2": -1,
        "3": -1,
        "4": -1,
        "5": -1,
        "6": -1,
        "7": -1,
        "8": -1,
        "9": -1
    }
}

function answerReducer(state: AnswerState = initialState, action: AnswerAction) {
    switch (action.type) {
        case SET:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.idx]: action.answer
                }
            }
        default:
            return state;
    }
}

export default answerReducer;
