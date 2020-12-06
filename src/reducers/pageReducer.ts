
const GO = 'page/GO' as const;
const GO_NEXT = 'page/GO_NEXT' as const;
const GO_PREV = 'page/GO_PREV' as const;

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


type PageAction = ReturnType<typeof go> | ReturnType<typeof goNext> | ReturnType<typeof goPrev>

type PageState = {
    pageIdx: number
}

const initialState: PageState = {
    pageIdx: 0
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
                pageIdx: state.pageIdx + 1
            }
        case GO_PREV:
            return {
                ...state,
                pageIdx: state.pageIdx - 1
            }
        default:
            return state;
    }
}

export default pageReducer;
