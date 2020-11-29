import React from 'react';
import resultMainImg from '../../assets/img/result_main.gif';
import resultOutlineImg from '../../assets/img/result_outline-black.png';

type ResultMainProps = {
    goNext: () => void;
}

function ResultMain({ goNext }: ResultMainProps) {

    return (
        <div className="result-wrp">
            <img className="result-outline" src={resultOutlineImg} />
            <img className="result-main-img" src={resultMainImg} />
            <p className="result-main-paragraph">
                ‘특별한 방’ 심리테스트는 저의 작업 &lt;Inner Garden&gt;에서 출발했습니다.<br /><br />
                &lt;Inner Garden&gt;은 저의 마음 속 자아와 만날 수 있는 내면의 공간을 시각화한 작업입니다.<br /><br />
                &lt;Inner Garden&gt;과 저의 다른 작업들이 굼금하시다면 결과 페이지의 Syeon’s Artworks 좌측 아이콘들을 클릭하세요.<br /><br />
                테스트에 참여해주셔서 진심으로 감사드립니다.
            </p>
            <button className="result-btn-view" onClick={goNext}>결과보기</button>
        </div>
    )
}

export default ResultMain;
