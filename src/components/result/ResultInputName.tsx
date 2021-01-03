import React, { ChangeEvent, useEffect } from 'react';
import resultOutlineImg from '../../assets/img/result_outline_black.png';
import useBgm from '../../hooks/useBgm';
import useLanguage from '../../hooks/useLanguage';

type ResultInputNameProps = {
    goNext: () => void;
    username: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ResultInputName({ goNext, username, onChange }: ResultInputNameProps) {

    const { pauseBgm } = useBgm();
    const { isEnglish } = useLanguage();

    useEffect(() => {
        pauseBgm();
    }, [])

    return (
        <div className="result-wrp main">
            <img className="result-outline main" src={resultOutlineImg} />
            <div className="result-inner main input-name">
                <p>{isEnglish ? "Please write your name." : "이름을 입력해주세요."}</p>
                <input className="result-input-name" type="text" value={username} onChange={onChange} />
                <button className="result-btn-view" onClick={goNext}>{isEnglish ? "Enter" : "확인"}</button>
            </div>
        </div>
    )
}

export default ResultInputName;
