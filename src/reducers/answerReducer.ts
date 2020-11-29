
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
    1: number,
    2: number,
    3: number,
    4: number,
    5: number,
    6: number,
    7: number,
    8: number,
    9: number
}

const initialState: AnswerState = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
}

function answerReducer(state: AnswerState = initialState, action: AnswerAction) {
    switch (action.type) {
        case SET:
            return {
                ...state,
                [action.idx]: action.answer
            }
        default:
            return state;
    }
}

export default answerReducer;
