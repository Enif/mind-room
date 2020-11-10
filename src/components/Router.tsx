import React from 'react';
import Intro from './Intro';
import usePage from '../hooks/usePage';
import Question from './Question';

function Router() {

    const {pageIdx} = usePage();

    const makePage = (idx: number) => {
        if (!idx) {
            return <Intro />
        }
        else {
            return <Question />
        }
    }

    return makePage(pageIdx);
}

export default Router;
