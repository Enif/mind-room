import React, { useState, ChangeEvent, useEffect } from 'react';
import useAnswer from '../../hooks/useAnswer';
import answersScoreData, { scoreDataType, scoreDataKeys } from '../../data/scoreData';
import ResultMain from './ResultMain';
import './result.scss';
import ResultInputName from './ResultInputName';
import ResultColor from './ResultColor';

type answersKeys = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";



function Result() {

    const { answers } = useAnswer();
    const [resultIndex, setResultIndex] = useState(0);
    const [username, setUsername] = useState("");
    const [resultColor, setResultColor] = useState("")

    useEffect(() => {
        const resultScore = calculator();
        setResultColor(findMax(resultScore))
        // const resultColor = findMax(resultScore);    
    }, [])

    const calculator = function () {
        const resultScore: scoreDataType = {
            red: 0,
            orange: 0,
            green: 0,
            sky: 0,
            navy: 0,
            pink: 0,
            brown: 0,
            white: 0
        }

        const addScore = function (score: scoreDataType) {
            // console.log('score >> ', score)
            for (const color in score) {
                const colorScore = score[color as scoreDataKeys];
                if (colorScore) {
                    resultScore[color as scoreDataKeys] += colorScore;
                }
            }
        }

        for (const qIdx in answers) {
            if (answers.hasOwnProperty(qIdx)) {
                const submittedAnswer = answers[qIdx as answersKeys];
                const answerScoreData = answersScoreData.find(ans => {
                    return ans.question.toString() === qIdx
                })
                let answerScore;
                if (answerScoreData) {
                    answerScore = answerScoreData.answers[submittedAnswer];
                }
                if (answerScore) {
                    addScore(answerScore.score);
                }
            }
        }

        // console.log('answers >> ', answers)
        // console.log('resultScore >> ', resultScore);
        return resultScore;
    }

    const findMax = function (score: scoreDataType) {
        let maxColor = "";
        let maxScore = -Infinity;

        // console.log(score)
        for (const color in score) {
            if (score[color as scoreDataKeys] > maxScore) {
                maxColor = color;
                maxScore = score[color as scoreDataKeys];
            }
        }

        return maxColor;
    }

    // const resultColor = 'white'

    const goNext = function () {
        setResultIndex(resultIndex + 1);
    }

    const onChange = function (e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value)
    }

    return (

        <>
            {
                resultIndex === 0 ?
                    <ResultMain goNext={goNext} />
                    :
                    resultIndex === 1 ?
                        <ResultInputName goNext={goNext} username={username} onChange={onChange} />
                        :
                        <ResultColor color={resultColor} username={username} />
            }
        </>
    )
}

export default Result;
