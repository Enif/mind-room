import React, { useState, useRef, useEffect } from 'react';
import usePage from '../hooks/usePage';
import Lottie from 'lottie-react';
import data from '../bodymovin/data.json';
import letterOpenSound from '../assets/sounds/letterOpen.mp3';
import './intro.scss';
import Footer from './Footer';
import useBackground from '../hooks/useBackground';

type IntroProps = {
  setBackgroundColor: (backgroundColor: string) => void;
}

function Intro() {

// function Intro({ setBackgroundColor }: IntroProps) {

  const { goNextPage } = usePage();
  const [isLetterOpened, setIsLetterOpened] = useState(false);
  const [isMsgOn, setIsMsgOn] = useState(false);
  const [isLottiePlay, setIsLottiePlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null)
  const { setBackgroundColor } = useBackground();

  useEffect(() => {
    setBackgroundColor("#95948a")
  }, [])

  const onAnimationEnd = () => {
    setIsMsgOn(true)
  }

  const onClickLetter = () => {
    if (audioRef.current && !isLetterOpened) {
      audioRef.current.play();
    }
    setIsLottiePlay(true);
    setIsLetterOpened(true);
  }

  return (
    <div className="intro-wrp" onClick={onClickLetter}>
      <Lottie className="lottie-wrp" autoplay={isLottiePlay} animationData={data} loop={false} onComplete={onAnimationEnd} />
      <div className={`intro-msg${isLetterOpened ? " hidden" : ""}`}>
        <p>편지가 도착했습니다.</p>
      </div>
      <div className={`intro-msg${isMsgOn ? "" : " hidden"}`}>
        <h5>마음의 방으로 초대합니다</h5>
        <p>안녕하세요, 아티스트 Syeon입니다.<br />
          저는 예술을 통해 사람들의 정서적 아픔에 공감하고,<br />
          이를 치유할 수 있는 방법을 연구하고 있습니다.<br />
          <br />
          이 테스트는 당신의 현재 심리를 알아보고,<br />
          색채심리학을 기반으로<br />
          당신에게 위안이 될 수 있는 방을 보여드립니다.<br />
          이를 활용하여 당신만의 공간을 꾸며보세요.<br />
          <br />
          많은 참여 부탁드립니다.<br />
          <br />
          감사합니다.<br />
          Syeon
        </p>
        <button className="intro-btn-start" onClick={() => goNextPage()}>시작하기</button>
      </div>
      {/* <Footer /> */}
      <audio ref={audioRef} src={letterOpenSound}></audio>
    </div>
  );
}

export default Intro;
