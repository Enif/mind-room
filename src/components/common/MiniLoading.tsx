import React, { useState, useEffect, useRef } from 'react';

function MiniLoading({ isLoaded }: { isLoaded: boolean }) {

    const [progress, setProgress] = useState(0);
    const svgPath = useRef<SVGPathElement>(null)

    useEffect(() => {
        const prInterval = setInterval(() => {
            setProgress(pr => {
                return pr + 10
            })
        }, 100)
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

    return (
        <div className={`mini-loading-wrp${isLoaded ? " hide" : ""}`} >
            <svg id="svg" className="loading-svg" height="100" width="100">
                <path fill="none" ref={svgPath} id="svgPath" d="M 7 71 L 50 100 L 92 71 L 92 28 L 50 0 L 7 28 L 7 71 Z" stroke="#95948a"
                    strokeWidth="2" />
            </svg>
        </div>
    );
}

export default MiniLoading;
