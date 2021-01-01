
const GO = 'page/GO' as const;
const GO_NEXT = 'page/GO_NEXT' as const;
const GO_PREV = 'page/GO_PREV' as const;
const GO_NEXT_QUESTION = 'page/GO_NEXT_QUESTION' as const;
const OPEN_ANSWER = 'page/OPEN_ANSWER' as const;
// const GO_PREV = 'page/GO_PREV' as const;

export const go = (idx: number) => ({
    type: GO,
    idx
});

export const goNext = () => ({
    type: GO_NEXT,
});

export const goPrev = () => ({
    type: GO_PREV
});

export const goNextQuestion = () => ({
    type: GO_NEXT_QUESTION
});

export const openAnswer = () => ({
    type: OPEN_ANSWER
});


type PageAction = ReturnType<typeof go> |
    ReturnType<typeof goNext> |
    ReturnType<typeof goPrev> |
    ReturnType<typeof goNextQuestion> |
    ReturnType<typeof openAnswer>

type PageState = {
    pageIdx: number,
    questionIdx: number,
    isAnswerOpened: boolean
}

const initialState: PageState = {
    pageIdx: 0,
    questionIdx: 0,
    isAnswerOpened: false
}

function pageReducer(state: PageState = initialState, action: PageAction) {
    switch (action.type) {
        case GO:
            return {
                ...state,
                pageIdx: action.idx
            }
        case GO_NEXT:
            return {
                ...state,
                pageIdx: state.pageIdx + 1,
                questionIdx: 0,
                isAnswerOpened: false
            }
        case GO_PREV:
            return {
                ...state,
                pageIdx: state.pageIdx - 1,
                questionIdx: 0,
                isAnswerOpened: false
            }
        case GO_NEXT_QUESTION:
            return {
                ...state,
                questionIdx: state.questionIdx + 1
            }
        case OPEN_ANSWER:
            return {
                ...state,
                isAnswerOpened: true
            }
        default:
            return state;
    }
}

export default pageReducer;
