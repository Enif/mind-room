import React from 'react';
import Intro from './intro/Intro';
import usePage from '../hooks/usePage';
import Question from './Question';
import Result from './result/Result';
import styled from 'styled-components';
import useBackground from '../hooks/useBackground';
import Footer from './Footer';
import bgm from '../assets/sounds/bgm.mp3';
import useSound from '../hooks/useSound';

const StyledDiv = styled.div<{
    backgroundColor?: string
} >`
    background-color: ${props => props.backgroundColor};
 `

function Router() {

    const { pageIdx } = usePage();
    const { backgroundColor } = useBackground();
    const { isSoundOn } = useSound();

    const makePage = (idx: number) => {
        if (!idx) {
            return <Intro />
        }
        else if (idx < 10) {
            // return <Result />
            return <Question />
        }
        else {
            return <Result />
        }
    }

    const playBgm = () => {

    }
    // 
    return (
        <StyledDiv className="app-wrapper" backgroundColor={backgroundColor}>
            <div className="app-inner">
                {makePage(pageIdx)}
                <audio muted={!isSoundOn} src={bgm} loop />
            </div>
            <Footer />
        </StyledDiv>
    )
}

export default Router;
