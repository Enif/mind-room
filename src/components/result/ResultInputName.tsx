import React, { ChangeEvent } from 'react';
import resultOutlineImg from '../../assets/img/result_outline_black.png';

type ResultInputNameProps = {
    goNext: () => void;
    username: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ResultInputName({ goNext, username, onChange }: ResultInputNameProps) {

    return (
        <div className="result-wrp main">
            <img className="result-outline main" src={resultOutlineImg} />
            <div className="result-inner main input-name">
                <p>이름을 입력해주세요.</p>
                <input className="result-input-name" type="text" value={username} onChange={onChange} />
                <button className="result-btn-view" onClick={goNext}>확인</button>
            </div>
        </div>
    )
}

export default ResultInputName;
