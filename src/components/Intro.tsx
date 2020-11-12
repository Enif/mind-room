import React, { useState } from 'react';
import usePage from '../hooks/usePage';
import Lottie from 'lottie-react';
import data from '../bodymovin/data.json';
import './intro.scss';

function Intro() {

  const { goNextPage } = usePage();
  const [isMsgOn, setIsMsgOn] = useState(false);

  const onAnimationEnd = () => {
    setIsMsgOn(true)
  }

  return (
    <div className="intro-wrp">
      <Lottie animationData={data} loop={false} onComplete={onAnimationEnd} />
      <div className={`intro-msg${isMsgOn ? "" : " hidden"}`}>
        <h5>특별한 방으로 초대합니다</h5>
        <p>안녕하세요 저는 작가 Syeon입니다.<br />
          저는 예술을 통해 사람들의 정서적 아픔에 공감하고,<br />
          이를 치유하기 위해 제가 어떠한 역할을 할 수<br />
          있을 지 계속해서 고민해왔습니다.<br />
          <br />
          그러한 고민으로부터 출발한 이 테스트는,<br />
          불안 유형과 컬러테라피 등을 기반으로<br />
          참여하신 분들의 각자를 위한<br />
          특별한 방을 소개하는 프로젝트입니다.<br />
          <br />
          이 작업이 여러분의 삶에 도움이 될 수 있길 바랍니다.<br />
          <br />
          감사합니다.<br />
          Syeon 올림
        </p>
        <button className="intro-btn-start" onClick={() => goNextPage()}>시작하기</button>
      </div>
    </div>
  );
}

export default Intro;
