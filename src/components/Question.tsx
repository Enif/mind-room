import React, { useEffect, MouseEvent } from 'react';
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
import useLanguage from '../hooks/useLanguage';

type answerType = {
    text: string,
    text_en?: string
}

const StyledParagraph = styled.p<{ textAlign?: string }>`
    color: ${props => props.color || "#FFFFFF"};
    text-align: ${props => props.textAlign || "center"};
`


function Question() {

    const { pageIdx, questionIdx, isAnswerOpened, goNextPage, goNextSentence, openAnswerOptions } = usePage();
    const { setAnswer } = useAnswer();
    const { isSoundOn } = useSound();
    const { setBackgroundColor } = useBackground();
    const { isEnglish } = useLanguage();

    const data = qData[pageIdx - 1];

    useEffect(() => {
        const data = qData[pageIdx - 1];
        setBackgroundColor(data.backgroudColor)
    }, [pageIdx, setBackgroundColor])


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
                <img className={makeImgClassName(idx, 1)} src={q1Img} alt="q1Img" />
                <img className={makeImgClassName(idx, 2)} src={q2Img} alt="q2Img" />
                <img className={makeImgClassName(idx, 3)} src={q3Img} alt="q3Img" />
                <img className={makeImgClassName(idx, 4)} src={q4Img} alt="q4Img" />
                <img className={makeImgClassName(idx, 5)} src={q5Img} alt="q5Img" />
                <img className={makeImgClassName(idx, 6)} src={q6Img} alt="q6Img" />
                <img className={makeImgClassName(idx, 7)} src={q7Img} alt="q7Img" />
                <img className={makeImgClassName(idx, 8)} src={q8Img} alt="q8Img" />
                <img className={makeImgClassName(idx, 9)} src={q9Img} alt="q9Img" />
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
                    {
                        questions[idx] && lineBreaker(questions[idx])
                    }
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
                onClick={(e) => {
                    e.stopPropagation();
                    onClickAnswer(idx)
                }
                }>{isEnglish ? <span className="text-english">{answer.text_en}</span> : answer.text}</button>
        })
    }

    const onClickBackground = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (questionIdx < data.question.length - 1) {
            goNextSentence();
        }
        else {
            openAnswerOptions();
        }
    }

    const onClickAnswer = (answer: number) => {
        setAnswer(pageIdx, answer);
        goNextPage();
    }

    return (
        <>
            {
                // pageIdx <= qData.length ?
                <div className="question">
                    <div className="question-inner" onClick={onClickBackground}>
                        {setBackgroudImg(pageIdx)}
                        <div className="question-qna" >
                            {
                                makeQuestionList(
                                    isEnglish ? data.question_en : data.question,
                                    questionIdx, data.questionColor, data["text-aline"])
                            }
                            {
                                questionIdx === 0 && pageIdx === 1 && !isAnswerOpened &&
                                <p className="question-msg-click">
                                    {isEnglish ?
                                        "Click the screen to move next." :
                                        "화면을 클릭하여 다음으로 넘어가세요"
                                    }
                                </p>
                            }
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
