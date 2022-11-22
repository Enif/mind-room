import React, { useState, useEffect, useRef } from 'react';
import SoundOnOff from '../common/SoundOnOff';
import outlineImg from '../../assets/img/result_outline_white.png';
import reddotImg from '../../assets/img/reddot.png';
import useLanguage from '../../hooks/useLanguage';
import usePage from '../../hooks/usePage';
import useBgm from '../../hooks/useBgm';

type IntroLoadingProps = {
    isImageLoaded: boolean,
    hide: () => void
}

function IntroLoading({ isImageLoaded, hide }: IntroLoadingProps) {

    const { goNextPage } = usePage();
    const [progress, setProgress] = useState(0);
    const [isSelectLanguage, setIsSelectLanguage] = useState(false);
    const svgPath = useRef<SVGPathElement>(null)
    const { setLanguage } = useLanguage();
    const { playBgm } = useBgm();


    useEffect(() => {
        const prInterval = setInterval(() => {
            setProgress(pr => {
                return pr < 100 ? pr + 1 : pr
            })
        }, 20)
        return () => {
            clearInterval(prInterval)
        }
    }, [])

    useEffect(() => {
        if (svgPath.current) {
            let totalLength = svgPath.current.getTotalLength();
            svgPath.current.style.strokeDasharray = totalLength.toString();
        }
    }, [])

    useEffect(() => {
        if (svgPath.current) {
            let totalLength = svgPath.current.getTotalLength();
            svgPath.current.style.strokeDashoffset = String(totalLength + (100 - totalLength * progress) / 100);
        }
    }, [progress])

    useEffect(() => {
        isImageLoaded && setProgress(100);
    }, [isImageLoaded])

    const onClickLanguage = (isEnglish: boolean) => {
        playBgm();
        setLanguage(isEnglish);
        setIsSelectLanguage(true);
        hide();
        goNextPage()
    }

    return (
        <div className={`intro-loading-wrp${isSelectLanguage ? " hide" : ""}`} >
            <img className="result-outline main" src={outlineImg} />
            <SoundOnOff className="intro-btn-sound" />
            <p className="intro-sound-text">소리를 꼭 켜주세요!<br />Please turn the sound on!</p>
            {/* <svg id="svg" className="intro-loading-svg" height="150" width="100">
                <path ref={svgPath} id="svgPath" d="M 50 0 L 7 28 L 7 73 L 7 71 L 50 100 L 92 71 L 92 28 Z" stroke="white"
                    strokeWidth="3" fill="none" />
                <text fontSize="1.2rem" x="35" y="53" fill="white">{progress}%</text>
            </svg> */}
            <div className={`intro-btn-language-wrp`}>
                <button className="intro-btn-language" onClick={() => onClickLanguage(false)}>시작하기</button>
                {/* <button className="intro-btn-language" onClick={() => onClickLanguage(true)}>English</button> */}
            </div>
            <div className='reddot-img-wrp'>
                <img className='reddot-img' src={reddotImg} alt='reddotImg' />
            </div>
            {/* <p className="intro-notice">English version will be updated soon</p> */}

        </div>
    );
}

export default IntroLoading;
