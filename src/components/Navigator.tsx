import React from 'react';
import usePage from '../hooks/usePage';
import './navigator.scss';

function Navigator() {

    const { pageIdx, goPrevPage } = usePage();

    return (
        <div className="navigator">
            <p onClick={() => goPrevPage()}>&lt; 뒤로가기</p>
            <p>{pageIdx}/9</p>
        </div>
    );
}

export default Navigator;
