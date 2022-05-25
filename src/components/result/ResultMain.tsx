import React, { useEffect, SyntheticEvent, useState } from 'react';
import resultMainImgGif from '../../assets/img/result_main.gif';
import resultMainImgWebp from '../../assets/img/result_main.webp';
import resultOutlineImg from '../../assets/img/result_outline_black.png';
import useBackground from '../../hooks/useBackground';
import MiniLoading from '../common/MiniLoading';
import useLanguage from '../../hooks/useLanguage';

type ResultMainProps = {
    goNext: () => void;
}

function ResultMain({ goNext }: ResultMainProps) {

    const { setBackgroundColor } = useBackground();
    const { isEnglish } = useLanguage();
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
                {
                    isEnglish ?
                        <p className="result-main-paragraph text-english">
                            'Mind-room' began from &lt;Inner Garden&gt;<br />
                            which expresses the emotional space for my inner-selves.<br />
                            <br />
                            If you want to know more about my works,<br />
                            please click the icons on the right<br />
                            of Syeon's Artworks on the result page.<br />
                            <br />
                            Thank you.
                        </p>
                        :
                        <p className="result-main-paragraph">
                            '마음의 방'은 저의 내면 자아를 위한 공간을 표현한 작업,<br />
                            &lt;Inner Garden&gt;에서 시작되었습니다.<br />
                            <br />
                            저의 다른 작업들이 궁금하시다면<br />
                            결과 페이지의 Syeon's Artworks<br />
                            우측 아이콘들을 클릭하세요.<br />
                            <br />
                            감사합니다.
                        </p>
                }
                <button className="result-btn-view" onClick={goNext}>Get the result</button>
            </div>
        </div>
    )
}

export default ResultMain;
