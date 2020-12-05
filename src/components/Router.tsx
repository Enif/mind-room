import React from 'react';
import Intro from './intro/Intro';
import usePage from '../hooks/usePage';
import Question from './Question';
import Result from './result/Result';
import styled from 'styled-components';
import useBackground from '../hooks/useBackground';
import Footer from './Footer';

const StyledDiv = styled.div<{
    backgroundColor?: string
} >`
    background-color: ${props => props.backgroundColor};
 `

function Router() {

    const { pageIdx } = usePage();
    const { backgroundColor } = useBackground();

    const makePage = (idx: number) => {
        if (!idx) {
            return <Intro />
        }
        else if (idx < 10) {
            return <Question />
        }
        else {
            return <Result />
        }
    }

    return (
        <StyledDiv className="app-wrapper" backgroundColor={backgroundColor}>
            <div className="app-inner">
                {makePage(pageIdx)}
            </div>
            <Footer />
        </StyledDiv>
    )
}

export default Router;
