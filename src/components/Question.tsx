import React, { useState, useEffect } from 'react';
import usePage from '../hooks/usePage';
import useAnswer from '../hooks/useAnswer';

import qData from '../data/questionData';
import q1Img from '../assets/img/questions/q1.jpg'
import q2Img from '../assets/img/questions/q2.jpg'
import q3Img from '../assets/img/questions/q3.jpg'
import q4Img from '../assets/img/questions/q4.jpg'
import q5Img from '../assets/img/questions/q5.jpg'
import q6Img from '../assets/img/questions/q6.jpg'
import q7Img from '../assets/img/questions/q7.jpg'
import q8Img from '../assets/img/questions/q8.jpg'
import q9Img from '../assets/img/questions/q9.jpg'

import Navigator from './Navigator';
import styled from 'styled-components';

import './question.scss'
import useSound from '../hooks/useSound';
import useBackground from '../hooks/useBackground';
import SoundOnOff from './common/SoundOnOff';

type answerType = {
    text: string
}

const StyledParagraph = styled.p<{ textAlign?: string }>`
    color: ${props => props.color || "#FFFFFF"};
    text-align: ${props => props.textAlign || "center"};
`

const StyledIcon = styled.i<{
}>`
    color: ${props => props.color || "#FFF"};
`

function Question() {

    const { pageIdx, goNextPage } = usePage();
    const { setAnswer } = useAnswer();
    const [qIdx, setQIdx] = useState(0);
    const [isAnswerOpened, setIsAnswerOpened] = useState(false);
    const { isSoundOn, soundOn, soundOff } = useSound();
    const { setBackgroundColor } = useBackground();

    const data = qData[pageIdx - 1];

    useEffect(() => {
        // console.log('set Color')
        // console.log(data.backgroudColor)
        setBackgroundColor(data.backgroudColor)
    }, [pageIdx])

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
        }, 500)
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
        return answers.map((answer, idx) => {
            return <button className={`btn-answer`}
                key={idx}
                onClick={() => onClickAnswer(idx)}>{answer.text}</button>
        })
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
        setIsAnswerOpened(false);
    }

    return (
        <>
            {
                // pageIdx <= qData.length ?
                <div className="question">
                    <div className="question-inner">
                        {setBackgroudImg(pageIdx)}
                        <SoundOnOff />
                        {
                            // isSoundOn ?
                            //     <button className="btn-sound" onClick={() => soundOff()}>
                            //         <StyledIcon className="ri-music-2-fill" color={data.questionColor}></StyledIcon>
                            //         {/* <i className="ri-music-2-fill"></i> */}
                            //     </button>
                            //     :
                            //     <button className="btn-sound" onClick={() => soundOn()}>
                            //         <StyledIcon className="ri-music-2-line" color={data.questionColor}></StyledIcon>
                            //         {/* <i className="ri-music-2-line"></i> */}
                            //     </button>
                        }
                        <div className="question-qna" >
                            {makeQuestionList(data.question, qIdx, data.questionColor, data["text-aline"])}
                            <div className="answers-wrp">
                                {isAnswerOpened && makeAnswerList(data.answer)}
                            </div>

                        </div>
                        {
                            data.sound &&
                            <audio muted={!isSoundOn} src={data.sound} autoPlay />
                        }
                    </div>
                    <Navigator />
                </div>
            }
        </>

    );
}

export default Question;
