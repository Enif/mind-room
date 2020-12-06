import React, { useEffect, SyntheticEvent, useState } from 'react';
import resultMainImgGif from '../../assets/img/result_main.gif';
import resultMainImgWebp from '../../assets/img/result_main.webp';
import resultOutlineImg from '../../assets/img/result_outline_black.png';
import useBackground from '../../hooks/useBackground';
import MiniLoading from '../common/MiniLoading';

type ResultMainProps = {
    goNext: () => void;
}

function ResultMain({ goNext }: ResultMainProps) {

    const { setBackgroundColor } = useBackground();
    const [isImgLoading, setIsImgLoading] = useState(true);

    useEffect(() => {
        setBackgroundColor("#6a6a6a");
    })

    const onImageLoad = function (e: SyntheticEvent) {
        // console.log('onload')
        setIsImgLoading(false)
    }

    return (
        <div className="result-wrp main">
            <img className="result-outline main" src={resultOutlineImg} alt="outline" />
            <div className="result-inner main">
                <div className="result-main-img-wrp">
                    <picture className="result-main-img" onLoad={onImageLoad}>
                        <source type="image/webp" srcSet={resultMainImgWebp} />
                        <img src={resultMainImgGif} alt={"resultMainImgGif"} />
                    </picture>
                    {/* <MiniLoading isLoaded={!isImgLoading} /> */}
                </div>
                {/* <img className="result-main-img" src={resultMainImg} /> */}
                <p className="result-main-paragraph">
                    ‘마음의 방’ 심리테스트는<br />
                    마음 속 자아와 만나는 내면의 공간을 표현한 작업,<br />
                    &lt;Inner Garden&gt;에서 시작되었습니다.<br />
                    <br />
                    저는 이 작업을 통해 누구나 자신의 마음을 들여다보고<br />
                    위로와 안정을 찾을 수 있는 정서적 공간(방)이 필요하다는<br />
                    생각이 들었고, 이를 심리테스트로 구현하게 되었습니다.<br />
                    이 테스트의 결과가 당신에게 도움이 되기를 바랍니다.<br />
                    <br />
                    &lt;Inner Garden&gt;과 저의 다른 작업들이 궁금하시다면<br />
                    결과 페이지의 Syeon’s Artworks 좌측 아이콘들을 클릭하세요.<br />
                    감사합니다.
                </p>
                <button className="result-btn-view" onClick={goNext}>결과보기</button>
            </div>
        </div>
    )
}

export default ResultMain;
