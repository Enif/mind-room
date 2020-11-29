import React, { useState, useEffect, useCallback } from 'react';
import usePage from '../hooks/usePage';
import useAnswer from '../hooks/useAnswer';

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
import Result from './Result';
import styled from 'styled-components';

import './question.scss'

type answerType = {
    text: string
}

const StyledQuestion = styled.div<{ backgroundColor?: string }>`
    background-color: ${props => props.backgroundColor || "#FFFFFF"};
`


const StyledParagraph = styled.p<{ textAlign?: string }>`
    color: ${props => props.color || "#FFFFFF"};
    text-align: ${props => props.textAlign || "center"};
`


function Question() {

    const { pageIdx, goNextPage } = usePage();
    const { setAnswer } = useAnswer();
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
        if (data && (qIdx > data.question.length - 1) && !isAnswerOpened) {
            setIsAnswerOpened(true)
        }
    }, [qIdx])


    const makeImgClassName = (pageIdx: number, imgIdx: number, ) => {
        if (pageIdx === imgIdx + 1 || pageIdx === imgIdx - 1) {
            return "background-img hide"
        }
        else if (pageIdx === imgIdx) {
            return "background-img"
        }
        else {
            return "background-img hidden"
        }
    }


    const setBackgroudImg = (idx: number) => {
        return (
            <>
                <img className={makeImgClassName(idx, 1)} src={q1Img} />
                <img className={makeImgClassName(idx, 2)} src={q2Img} />
                <img className={makeImgClassName(idx, 3)} src={q3Img} />
                <img className={makeImgClassName(idx, 4)} src={q4Img} />
                <img className={makeImgClassName(idx, 5)} src={q5Img} />
                <img className={makeImgClassName(idx, 6)} src={q6Img} />
                <img className={makeImgClassName(idx, 7)} src={q7Img} />
                <img className={makeImgClassName(idx, 8)} src={q8Img} />
                <img className={makeImgClassName(idx, 9)} src={q9Img} />
            </>
        )
    }

    const makeQuestionList = (questions: string[], idx: number, color: string, textAlign?: string) => {
        if (idx > questions.length - 1) {
            idx = questions.length - 1;
        }
        return (
            <div className="questions-wrp">
                <StyledParagraph color={color} textAlign={textAlign} key={idx}>
                    {questions[idx] && lineBreaker(questions[idx])}
                </StyledParagraph>
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
                    answers.map((answer, idx) => {
                        return <button className="btn-answer"
                            key={idx}
                            onClick={() => onClickAnswer(idx)}>{answer.text}</button>
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

    const onClickAnswer = (answer: number) => {
        setAnswer(pageIdx, answer);
        setQIdx(0);
        goNextPage();
    }

    return (
        <>
            {
                pageIdx <= qData.length ?
                    <StyledQuestion className="question" backgroundColor={data.backgroudColor}>

                        <div className="question-inner">
                            {setBackgroudImg(pageIdx)}
                            {makeQuestionList(data.question, qIdx, data.questionColor, data["text-aline"])}
                            {
                                isAnswerOpened &&
                                makeAnswerList(data.answer)
                            }
                        </div>
                        <Navigator />
                    </StyledQuestion>
                    :
                    <Result />
            }
        </>

    );
}

export default Question;
