import React, { useState, useEffect, useRef } from 'react';
import SoundOnOff from '../common/SoundOnOff';
import outlineImg from '../../assets/img/result_outline_white.png';

function IntroLoading({ isImageLoaded }: { isImageLoaded: boolean }) {

    const [progress, setProgress] = useState(0);
    const svgPath = useRef<SVGPathElement>(null)

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

    return (
        <div className={`intro-loading-wrp${isImageLoaded ? " hide" : ""}`} >
            <img className="result-outline main" src={outlineImg} />
            <SoundOnOff />
            <p className="intro-sound-text">사운드가 포함된 테스트입니다.<br />소리를 켜주세요!</p>
            <svg id="svg" className="intro-loading-svg" height="150" width="100">
                <path ref={svgPath} id="svgPath" d="M 50 0 L 7 28 L 7 73 L 7 71 L 50 100 L 92 71 L 92 28 Z" stroke="white"
                    strokeWidth="3" fill="none" />
                <text fontSize="1.2rem" x="35" y="53" fill="white">{progress}%</text>
            </svg>
            <p className="intro-notice">English version will be updated soon</p>

        </div>
    );
}

export default IntroLoading;
