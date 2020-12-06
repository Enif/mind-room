import React from 'react';
import usePage from '../hooks/usePage';
import './navigator.scss';
import SoundOnOff from './common/SoundOnOff';


function Navigator() {

    const { pageIdx, goPrevPage } = usePage();

    return (
        <div className="navigator">
            <p className="navigator-back" onClick={() => goPrevPage()}>&lt; 뒤로가기</p>
            <p>{pageIdx}/9</p>
            <SoundOnOff className="question-btn-sound" color={"rgba(255, 255, 255, 0.65)"} />
        </div>
    );
}

export default Navigator;
