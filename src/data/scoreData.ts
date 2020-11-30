export type scoreDataKeys = "red" | "orange" | "green" | "sky" | "navy" | "pink" | "brown" | "white";

export type scoreDataType = {
    red: number,
    orange: number,
    green: number,
    sky: number,
    navy: number,
    pink: number,
    brown: number,
    white: number
}

export type answerDataType = {
    index: number,
    score: scoreDataType
}

export type answersScoreDataType = {
    question: number,
    answers: answerDataType[]
}

const answersScoreData: answersScoreDataType[] = [
    {
        question: 1,
        answers: [
            {
                index: 1,
                score: {
                    red: 0,
                    orange: 0,
                    green: 50,
                    sky: 50,
                    navy: 50,
                    pink: 0,
                    brown: 30,
                    white: 0
                }
            },
            {
                index: 2,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 30,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 3,
                score: {
                    red: 50,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 4,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 5,
                score: {
                    red: 0,
                    orange: 50,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            }
        ]
    },
    {
        question: 2,
        answers: [
            {
                index: 1,
                score: {
                    red: -120,
                    orange: -120,
                    green: 0,
                    sky: 100,
                    navy: 0,
                    pink: 100,
                    brown: 0,
                    white: 0
                }
            },
            {
                index: 2,
                score: {
                    red: 0,
                    orange: 0,
                    green: -30,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 3,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 100
                }
            },
            {
                index: 4,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: -30,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 5,
                score: {
                    red: 0,
                    orange: 0,
                    green: 30,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 100,
                    white: 0
                }
            }
        ]
    },
    {
        question: 3,
        answers: [
            {
                index: 1,
                score: {
                    red: 50,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 100,
                    pink: 0,
                    brown: 100,
                    white: -100
                }
            },
            {
                index: 2,
                score: {
                    red: -100,
                    orange: 50,
                    green: 100,
                    sky: 0,
                    navy: 70,
                    pink: 0,
                    brown: 0,
                    white: -100
                }
            },
            {
                index: 3,
                score: {
                    red: 100,
                    orange: 70,
                    green: -70,
                    sky: -120,
                    navy: 0,
                    pink: 100,
                    brown: 0,
                    white: -100
                }
            },
            {
                index: 4,
                score: {
                    red: 0,
                    orange: 70,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: -100
                }
            },
            {
                index: 5,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 100
                }
            }
        ]
    },
    {
        question: 4,
        answers: [
            {
                index: 1,
                score: {
                    red: 50,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 70,
                    white: -50
                }
            },
            {
                index: 2,
                score: {
                    red: 0,
                    orange: 0,
                    green: 100,
                    sky: 100,
                    navy: 100,
                    pink: 0,
                    brown: 0,
                    white: -50
                }
            },
            {
                index: 3,
                score: {
                    red: 0,
                    orange: 70,
                    green: 100,
                    sky: 0,
                    navy: 70,
                    pink: 0,
                    brown: 0,
                    white: -50
                }
            },
            {
                index: 4,
                score: {
                    red: 100,
                    orange: 100,
                    green: -50,
                    sky: 70,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: -50
                }
            },
            {
                index: 5,
                score: {
                    red: -30,
                    orange: -30,
                    green: -30,
                    sky: -30,
                    navy: -30,
                    pink: -30,
                    brown: -30,
                    white: 100
                }
            }
        ]
    },
    {
        question: 5,
        answers: [
            {
                index: 1,
                score: {
                    red: 0,
                    orange: 0,
                    green: 100,
                    sky: 100,
                    navy: 0,
                    pink: 0,
                    brown: 50,
                    white: -100
                }
            },
            {
                index: 2,
                score: {
                    red: 100,
                    orange: 100,
                    green: 30,
                    sky: 0,
                    navy: 0,
                    pink: 70,
                    brown: 0,
                    white: -100
                }
            },
            {
                index: 3,
                score: {
                    red: 100,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 50,
                    pink: 50,
                    brown: 0,
                    white: -100
                }
            },
            {
                index: 4,
                score: {
                    red: 0,
                    orange: 0,
                    green: 100,
                    sky: 100,
                    navy: 70,
                    pink: 0,
                    brown: 0,
                    white: -100
                }
            },
            {
                index: 5,
                score: {
                    red: -30,
                    orange: -30,
                    green: -30,
                    sky: -30,
                    navy: -30,
                    pink: -30,
                    brown: -30,
                    white: 100
                }
            }
        ]
    },
    {
        question: 6,
        answers: [
            {
                index: 1,
                score: {
                    red: 0,
                    orange: 0,
                    green: -120,
                    sky: -70,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 0
                }
            },
            {
                index: 2,
                score: {
                    red: 0,
                    orange: 100,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 0
                }
            },
            {
                index: 3,
                score: {
                    red: -50,
                    orange: -50,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: -70,
                    brown: 0,
                    white: 0
                }
            },
            {
                index: 4,
                score: {
                    red: 0,
                    orange: 0,
                    green: -70,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 100,
                    white: 0
                }
            },
            {
                index: 5,
                score: {
                    red: -30,
                    orange: -30,
                    green: -30,
                    sky: -30,
                    navy: -30,
                    pink: -30,
                    brown: -30,
                    white: 100
                }
            }
        ]
    },
    {
        question: 7,
        answers: [
            {
                index: 1,
                score: {
                    red: 30,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 30,
                    brown: 0,
                    white: 50
                }
            },
            {
                index: 2,
                score: {
                    red: 0,
                    orange: 30,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 3,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 100,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 4,
                score: {
                    red: 0,
                    orange: 0,
                    green: 50,
                    sky: 50,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 5,
                score: {
                    red: 50,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 50,
                    brown: 0,
                    white: 0
                }
            }
        ]
    },
    {
        question: 8,
        answers: [
            {
                index: 1,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 2,
                score: {
                    red: 0,
                    orange: 30,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 3,
                score: {
                    red: 0,
                    orange: 0,
                    green: 50,
                    sky: 50,
                    navy: 50,
                    pink: 0,
                    brown: 0,
                    white: 0
                }
            },
            {
                index: 4,
                score: {
                    red: 0,
                    orange: -50,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: -30,
                    brown: 0,
                    white: 0
                }
            },
            {
                index: 5,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 70,
                    white: -70
                }
            }
        ]
    },
    {
        question: 9,
        answers: [
            {
                index: 1,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 50,
                    white: 0
                }
            },
            {
                index: 2,
                score: {
                    red: 0,
                    orange: 0,
                    green: -50,
                    sky: -50,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 0
                }
            },
            {
                index: 3,
                score: {
                    red: 0,
                    orange: -30,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 30
                }
            },
            {
                index: 4,
                score: {
                    red: 0,
                    orange: -70,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: -50,
                    brown: 0,
                    white: 0
                }
            },
            {
                index: 5,
                score: {
                    red: 0,
                    orange: 0,
                    green: 0,
                    sky: 0,
                    navy: 0,
                    pink: 0,
                    brown: 0,
                    white: 50
                }
            }
        ]
    },


];

export default answersScoreData;
