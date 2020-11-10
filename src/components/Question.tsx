import React, { useState, useEffect, useCallback } from 'react';
import usePage from '../hooks/usePage';
import qData from '../questions.json';
import q1Img from '../assets/img/q1.jpg'
import q2Img from '../assets/img/q2.jpg'
import q3Img from '../assets/img/q3_1.jpg'
import q4Img from '../assets/img/q4.jpg'
import q5Img from '../assets/img/q5.jpg'
import q6Img from '../assets/img/q6.jpg'
import q7Img from '../assets/img/q7.jpg'
import q8Img from '../assets/img/q8.jpg'
import q9Img from '../assets/img/q9.jpg'

import Navigator from './Navigator';
import styled from 'styled-components';

import './question.scss'

type answerType = {
    text: string
}

const StyledQuestion = styled.p<{ textAlign?: string }>`
    color: ${props => props.color || "#FFFFFF"};
    text-align: ${props => props.textAlign || "center"};
`


function Question() {

    const { pageIdx, goNextPage } = usePage();
    const [qIdx, setQIdx] = useState(0);
    const [isAnswerOpened, setIsAnswerOpened] = useState(false);

    const data = qData[pageIdx - 1];


    useEffect(() => {
        if (qIdx) {
            setQIdx(0);
        }
        if (isAnswerOpened) {
            setIsAnswerOpened(false);
        }
        console.log('make Interval')
        const qInterval = setInterval(() => {
            console.log('tick')
            setQIdx(idx => idx + 1)
        }, 2000)
        return () => {
            console.log('clear Interval')
            clearInterval(qInterval)
        }
    }, [pageIdx])

    useEffect(() => {
        if (qIdx > data.question.length - 1 && !isAnswerOpened) {
            setIsAnswerOpened(true)
        }
    }, [qIdx])


    const setBackgroudImg = (idx: number) => {
        switch (idx) {
            case 1:
                return <img className="background-img" src={q1Img} />
            case 2:
                return <img className="background-img" src={q2Img} />
            case 3:
                return <img className="background-img" src={q3Img} />
            case 4:
                return <img className="background-img" src={q4Img} />
            case 5:
                return <img className="background-img" src={q5Img} />
            case 6:
                return <img className="background-img" src={q6Img} />
            case 7:
                return <img className="background-img" src={q7Img} />
            case 8:
                return <img className="background-img" src={q8Img} />
            case 9:
                return <img className="background-img" src={q9Img} />
            default:
                break;
        }
    }

    const makeQuestionList = (questions: string[], idx: number, color: string, textAlign?: string) => {
        if (idx > questions.length - 1) {
            idx = questions.length - 1;
        }
        return (
            <div className="questions-wrp">
                <StyledQuestion color={color} textAlign={textAlign} key={idx}>
                    {questions[idx] && lineBreaker(questions[idx])}
                </StyledQuestion>
            </div>
        )
    }

    const lineBreaker = function (text: string) {
        return text.split('\n')
            .map((line, idx, arr) => {
                return (
                    <>
                        {line}
                        {idx < arr.length - 1 && <br />}
                    </>
                )
            })
    }

    const makeAnswerList = (answers: answerType[]) => {
        return (
            <div className="answers-wrp">
                {
                    answers.map((answer) => {
                        return <button className="btn-answer" onClick={onClickAnswer}>{answer.text}</button>
                    })
                }
            </div>
        )
    }

    // const onClickQuestion = useCallback(
    //     () => {
    //         if (qIdx < data.question.length - 1) {
    //             setQIdx(idx => idx + 1);
    //         }
    //         else {
    //             setIsAnswerOpened(() => true);
    //         }
    //     },
    //     [qIdx]
    // ) 

    // const onClickQuestion = () => {
    //     if (qIdx < data.question.length - 1) {
    //         setQIdx(idx => idx + 1);
    //     }
    //     else {
    //         setIsAnswerOpened(() => true);
    //     }
    // }

    const onClickAnswer = () => {
        setQIdx(0);
        goNextPage();
    }

    return (
        <>
            {
                pageIdx < qData.length ?
                    <div className="question">
                        {setBackgroudImg(pageIdx)}
                        {makeQuestionList(data.question, qIdx, data.questionColor, data["text-aline"])}
                        {
                            isAnswerOpened &&
                            makeAnswerList(data.answer)
                        }
                        <Navigator />
                    </div>
                    :
                    <div>
                        끗
                    </div>
            }
        </>

    );
}

export default Question;
