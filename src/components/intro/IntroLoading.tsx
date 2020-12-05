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
        }, 10)
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
            <svg id="svg" className="intro-loading-svg" height="200" width="200">
                <path ref={svgPath} id="svgPath" d="M 15 142 L 100 200 L 185 142 L 185 57 L 100 0 L 15 57 L 15 142 Z" stroke="white"
                    strokeWidth="6" fill="none" />
                <text x="85" y="100" fill="white">{progress}%</text>
            </svg>
        </div>
    );
}

export default IntroLoading;
