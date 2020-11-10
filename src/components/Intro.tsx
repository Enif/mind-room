import React from 'react';
import introImg from '../assets/Intro_letter.jpg';
import usePage from '../hooks/usePage';

function Intro() {

  const { goNextPage } = usePage();

  return (
      <div onClick={() => goNextPage()}>
          <img src={introImg}/>
      </div>
  );
}

export default Intro;
